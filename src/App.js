import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './index.scss'
import { colors, breakpoints } from './helpers/styles';
import { AppProvider } from './components/AppContext';

import Header from './components/Header';
import Home from './sections/Home';
import Who from './sections/Who';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const StyledBody = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  height: 200vh;
  font-family: 'Quicksand', sans-serif;

  p {
    font-size: 16pt;
    
    span {
      color: ${colors.lightPink};
    }
  }

  h1 {
    color: ${colors.lightPink};

    svg {
      margin-right: 20px;
    }
}
`;

function App() {
  const [language, setLanguage] = useState('en');
  const [mobile, setMobile] = useState(undefined);
  const toggleLanguage = () => {
    setLanguage(language => (language === 'en' ? 'pt' : 'en'));
  }

  const resize = () => {
    const newState = window.innerWidth <= parseInt(breakpoints.mobileMax);
    if (mobile !== newState) {
      setMobile(newState);
    }
  }

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return function cleanup() {
      window.removeEventListener('resize', resize);
    }
  });

  return (
    <AppProvider value={{ language, toggleLanguage, mobile }}>
      <StyledBody>
        <Header />
        <Home />
        <Who />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </StyledBody>
    </AppProvider>
  );
}

export default App;
