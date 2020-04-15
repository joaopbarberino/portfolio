import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { Container, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import data from '../helpers/data.json';
import { colors } from '../helpers/styles';
import AppContext from '../components/AppContext';

const StyledSkillsContainer = styled(Container)`
    padding-top: 90px;

    p {
        margin-top: 30px;
        color: ${colors.light};
        text-align: center;
    }
`;

const StyledStrengthsContainer = styled.div`
    svg {
        margin-top: 8px;
        margin-right: 8px;
        color: ${colors.lightPink};
        position: absolute;
        right: 0;
        transition: all 1s;
    }

    .opacity-0 {
        opacity: 0;
    }

    .strength {
        font-size: 18pt;
        color: ${colors.light};
        margin-bottom: 20px;

        .progress-container {
            margin-top: 5px;
            border: 3px solid ${colors.pink};
            position: relative;

            /* padding: 3px; */
            
            .progress-bar {
                /* border: 2px solid ${colors.pink}; */
                height: 35px;
                background-color: ${colors.pink};
                transition: all 1.5s;
            }

            .progress-bar-animated {
                animation-duration: 2s;
            }
            .progress-bar-striped {
                background-size: 32px 1px
            }
        }
        
        sup {
            top: 0;
            font-size: 9pt;
        }
    }
`;

const Skills = () => {
    const { language, mobile } = useContext(AppContext);
    const mobileAnimationStartPoint = useRef();
    const [containerY, setContainerY] = useState(undefined);
    const [scrollY, setScrollY] = useState(window.scrollY);

    const parsedStrengths = [];
    for (let language in data) {
        parsedStrengths[language] = data[language].skills.strengths.map(strength => strength = { ...strength, checked: false });
    }
    const [strengths, setStrengths] = useState(parsedStrengths);

    const checkBar = useCallback(key => {
        let changes = 0;

        for (let language in data) {
            if (!strengths[language][key].checked) {
                strengths[language][key].checked = true;
                changes++;
            }
        }

        if (changes > 0) {
            setStrengths({ ...strengths });
        }
    }, [strengths]);

    const updateScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        if (mobile) {
            if (scrollY > containerY) {
                strengths[language].map((strength, key) => checkBar(key));
            }

            window.addEventListener('scroll', updateScroll);
            return function cleanup() {
                window.removeEventListener('scroll', updateScroll);
            }
        }
    }, [mobile, language, scrollY, containerY, strengths, checkBar]);

    useEffect(() => {
        if (mobileAnimationStartPoint.current) {
            setContainerY(mobileAnimationStartPoint.current.offsetTop);
        }
    }, [mobileAnimationStartPoint]);

    return (
        <StyledSkillsContainer id='skills'>
            <h1>
                <FontAwesomeIcon icon={faStar} />{data[language].skills.title}
            </h1>
            <p ref={mobileAnimationStartPoint}>
                {ReactHTMLParser(data[language].skills.text)}
            </p>
            <StyledStrengthsContainer>
                {
                    strengths[language].map((strength, key) => {
                        return (
                            <div
                                key={key}
                                className='strength'
                                onMouseOver={mobile ? undefined : () => checkBar(key)}
                            >
                                {ReactHTMLParser(strength.name)}
                                <div className='progress-container'>
                                    {(key === 0 && !mobile) &&
                                        <FontAwesomeIcon
                                            size='xs'
                                            icon={faMousePointer}
                                            className={strengths[language][0].checked ? 'opacity-0' : ''}
                                        />
                                    }
                                    <Progress
                                        bar
                                        animated
                                        value={strength.checked ? strength.value : 0}
                                    />
                                </div>
                            </div>
                        );
                    })
                }
            </StyledStrengthsContainer>
        </StyledSkillsContainer >
    );
}

export default Skills;