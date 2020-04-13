import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import AppContext from '../components/AppContext';
import data from '../helpers/data.json';
import { colors } from '../helpers/styles';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

const StyledWhoContainer = styled(Container)`
    color: ${colors.light};
    text-align: justify;
    padding-top: 90px;

    h1 {
        color: ${colors.lightPink};
    }
    svg {
        margin-right: 20px;
    }
`;

const StyledText = styled.div`
    border-left: 3px solid ${colors.pink};
    padding-left: 20px;
    margin-top: 30px;

    p {
        margin-bottom: 25px;
        font-size: 16pt;
    }
`;

const Who = () => {
    const { language } = useContext(AppContext);

    return (
        <StyledWhoContainer id='who'>
            <h1>
                <FontAwesomeIcon icon={faIdCard} />{data[language].who.title}
            </h1>
            <StyledText>
                {
                    data[language].who.text.map((element, key) => {
                        return (
                            <p key={key}>
                                {ReactHtmlParser(element)}
                            </p>
                        );
                    })
                }
            </StyledText>
        </StyledWhoContainer>
    )
}

export default Who;