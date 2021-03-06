import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import { colors, breakpoints } from '../helpers/styles';
import data from '../helpers/data.json';
import { Container } from 'reactstrap';
import AppContext from '../components/AppContext';
import HomeButton from '../components/HomeButton';

const StyledHomeContainer = styled(Container)`
    text-align: center;
    color: ${colors.light};
`;

const StyledProfilePicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;

    div {
        transition: all .2s;
        position: absolute;
        height: 260px;
        width: 500px;
        background-color: ${colors.pink};

        &:hover {
            width: 600px;
        }
    }

    img {
        transition: all .2s;
        position: relative;
        width: 300px;
        border: 5px solid ${colors.pink};
        border-radius: 4px;

        &:hover {
            width: 350px;
        }
    }

    @media (max-width: ${breakpoints.mobileMax}) {
        div, div:hover {
            top: 0;
            width: 100%;
            height: 320px;
        }

        img:hover {
            width: 300px;
        }
    }
`;

const StyledText = styled.div`
    margin-top: 70px;

    p {
        font-size: 20pt!important;
        margin: 0;
    }
`;

const Home = () => {
    const { language } = useContext(AppContext);

    return (
        <StyledHomeContainer id='home'>
            <StyledProfilePicContainer>
                <div></div>
                <img
                    title={data[language].home.imgTitle}
                    alt={data[language].home.imgTitle}
                    src={process.env.PUBLIC_URL + '/img/profile.jpg'}
                />
            </StyledProfilePicContainer>
            <StyledText>
                {data[language].home.text.map((text, key) => {
                    return (
                        <p key={key}>
                            {ReactHtmlParser(text)}
                        </p>
                    );
                })}
            </StyledText>
            <HomeButton text={data[language].home.button} />
        </StyledHomeContainer>
    );
}

export default Home;