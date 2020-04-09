import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from './helpers/styles';
import './index.scss'

import Header from './components/Header';
import { AppProvider } from './components/AppContext';

import Home from './sections/Home';

const StyledBody = styled.div`
  background-color: ${colors.dark};
  height: 200vh;
`;

function App() {
  const [language, setLanguage] = useState('en');
  const [mobile, setMobile] = useState(true);
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
      </StyledBody>
    </AppProvider>
  );
}

export default App;
