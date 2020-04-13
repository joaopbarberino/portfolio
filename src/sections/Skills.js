import React, { useContext, useState } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { Container, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../helpers/data.json';
import { colors } from '../helpers/styles';
import AppContext from '../components/AppContext';

const StyledSkillsContainer = styled(Container)`
    h1 {
        color: ${colors.lightPink};

        svg {
            margin-right: 20px;
        }
    }

    p {
        margin-top: 30px;
        color: ${colors.light};
        text-align: center;
    }
`;

const StyledStrengthsContainer = styled.div`
    .strength {
        font-size: 18pt;
        color: ${colors.light};
        margin-bottom: 20px;

        .progress-container {
            margin-top: 5px;
            border: 3px solid ${colors.pink};
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
    const { language } = useContext(AppContext);

    const parsedStrengths = data[language].skills.strengths.map(strength => strength = { ...strength, checked: false });
    const [strengths, setStrengths] = useState(parsedStrengths);

    const checkBar = key => {
        strengths[key].checked = true;
        setStrengths([...strengths]);
    }

    return (
        <StyledSkillsContainer id='skills'>
            <h1>
                <FontAwesomeIcon icon={faStar} />{data[language].skills.title}
            </h1>
            <p>
                {ReactHTMLParser(data[language].skills.text)}
            </p>
            <StyledStrengthsContainer>
                {
                    strengths.map((strength, key) => {
                        return (
                            <div key={key} className='strength' onMouseOver={() => checkBar(key)}>
                                {ReactHTMLParser(strength.name)}
                                <div className='progress-container'>
                                    <Progress bar animated value={strength.checked ? strength.value : 0} />
                                </div>
                            </div>
                        );
                    })
                }
            </StyledStrengthsContainer>
        </StyledSkillsContainer>
    );
}

export default Skills;