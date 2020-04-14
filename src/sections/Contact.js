import React, { useContext } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import data from '../helpers/data.json';
import { colors } from '../helpers/styles';
import AppContext from '../components/AppContext';

const StyledContactContainer = styled(Container)`
    padding-top: 90px;
    padding-bottom: 90px;

    p {
        margin-top: 20px;
        color: ${colors.light};
        text-align: center;
    }

    .row {
        text-align: center;

        a {
            padding: 40px 20px 10px;
            margin-right: 50px;
            transition: all .5s;

            &:hover {
                border-radius: 10px;
                background-color: ${colors.pink};
                padding: 50px 30px 20px;

                svg {
                    color: ${colors.light}
                }
            }
        }

        svg {
            transition: all .5s;
            color: ${colors.lightPink};
            width: 50px;
            height: 50px;
        }
    }
`;


const Contact = () => {
    const { language } = useContext(AppContext);

    return (
        <StyledContactContainer id='contact'>
            <h1><FontAwesomeIcon icon={faComments} />{data[language].contact.title}</h1>
            <p>{ReactHTMLParser(data[language].contact.text)}</p>
            <Row>
                <Col xs={12}>
                    <p>
                        <a href='https://www.linkedin.com/in/joao-pedro-barberino-silva/' target='__blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href='mailto:joao.p.barberino@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </p>
                </Col>
            </Row>
        </StyledContactContainer>
    )
}

export default Contact;