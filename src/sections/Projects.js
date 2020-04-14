import React, { useContext } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import data from '../helpers/data.json';
import { colors } from '../helpers/styles';
import AppContext from '../components/AppContext';
import ProjectCard from '../components/ProjectCard';

const StyledProjectsContainer = styled(Container)`
    padding-top: 90px;

    p {
        margin-bottom: 50px;
        text-align: center;
        color: ${colors.light};
    }

`;

const Projects = () => {
    const { language } = useContext(AppContext);

    return (
        <StyledProjectsContainer id='projects'>
            <h1>
                <FontAwesomeIcon icon={faCode} />{data[language].projects.title}
            </h1>
            <p>
                {ReactHTMLParser(data[language].projects.text)}
            </p>

            {
                data[language].projects.works.map((project, key) => {
                    return <ProjectCard key={key} project={project} index={key} />
                })
            }

        </StyledProjectsContainer>
    );
}

export default Projects;