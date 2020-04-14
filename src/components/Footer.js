import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers/styles';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const StyledFooterContainer = styled(Container)`
    background-color: ${colors.darkPink};
    text-align: center;
    padding: 12px 0 3px;

    h5 {
        font-size: 12pt;
        color: ${colors.lightPink};
    }

    .container {
        position: relative;

        button {
            transition: all .5s;
            padding: 5px 10px;
            position: absolute;
            right: 2px;
            top: -9px;
            background-color: ${colors.lightPink};
            border: 1px solid ${colors.darkPink};
            border-radius: 5px;

            svg {
                color: ${colors.light}
            }

            &:focus {
                outline: none;
            }

            &:hover {
                top: -20px;
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooterContainer fluid>
            <Container>
                <h5><span>João Pedro Barberino</span> ©‎ {(new Date()).getFullYear()}</h5>
                <button onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faArrowUp} /></button>
            </Container>
        </StyledFooterContainer>
    );
}

export default Footer;