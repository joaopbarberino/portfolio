import React, { useContext } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';
import { colors, breakpoints } from '../helpers/styles';
import AppContext from './AppContext';

const StyledRow = styled(Row)`
    margin-bottom: 50px;

    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }

    h3 {
        color: ${colors.lightPink};
    }

    .opacity-0 {
        opacity: 0;
    }

    p {
        text-align: justify;
        span {
            font-size: 16pt;
        }
    }

    .img-container {
        background-color: ${colors.pink};
        border: 2px solid ${colors.pink};
        position: relative;
        transition: all 1.1s;

        a {
            text-decoration: none;
            height: 100%;
            display: flex;
            justify-content: center;
        }

        img {
            width: 100%;
            transition: all 0.7s;
            z-index: 1;
            align-self: center;
        
            &.border-right-rd {
                border-bottom-right-radius: 90px;  
            }

            &.border-left-rd {
                border-bottom-left-radius: 90px;
            }
        }

        img + svg {
            position: absolute;
            color: ${colors.light};
            bottom: 10px;
            transition: all .7s;

            &.right {
                right: 10px;
            }

            &.left {
                left: 10px;
            }
        }
        span {
            position: absolute;
            font-size: 100%;
            color: ${colors.light};
            align-self: center;
            transform: rotateX(-180deg);
        }

        &:hover {
            transform: rotateX(-180deg);

            img, img + svg {
                opacity: 0.1;
            }
        }
    }

    @media(max-width: ${breakpoints.mobileMax}) {
        span {
            font-size: 12pt;
        }

        .img-container {
            margin-bottom: 30px;
        }
    }
`;

const ProjectCard = ({ project, index }) => {
    const { mobile } = useContext(AppContext);

    return (
        <StyledRow>
            <Col
                className={mobile ? 'order-1' : index % 2 === 0 ? 'order-1' : 'order-2'}
                xs={12}
                lg={5}
            >
                <div className='img-container'>
                    <a href={project.link} target='__blank'>
                        <span>{project.link}</span>
                        <img
                            alt={project.link}
                            className={mobile ? 'border-right-rd' : index % 2 === 0 ? 'border-right-rd' : 'border-left-rd'}
                            src={process.env.PUBLIC_URL + project.img}
                        />
                        <FontAwesomeIcon
                            size='xs'
                            className={mobile ? 'right' : index % 2 === 0 ? 'right' : 'left'}
                            icon={faExternalLinkAlt}
                        />
                    </a>
                </div>
            </Col>
            <Col
                className={mobile ? 'order-2' : index % 2 === 0 ? 'order-2' : 'order-1 text-right'}
                xs={12}
                lg={7}
            >
                <h3>{project.name}</h3>
                <p>{ReactHTMLParser(project.text)}</p>
            </Col>
        </StyledRow>
    );
}

export default ProjectCard;