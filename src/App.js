import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import colors from './helpers/colors';
import './index.scss'

const StyledBody = styled.div`
  background-color: ${colors.dark};
  height: 200vh;
  
  outline: none!important;

`;

function App() {
  return (
    <StyledBody>
      <Header />
    </StyledBody>
  );
}

export default App;
