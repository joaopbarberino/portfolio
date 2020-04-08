import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import styled from 'styled-components';
import colors from '../helpers/colors';

const StyledNavbarContainer = styled(Container)`
  .navbar {
    padding: 0;

    .nav-item {
      transition: all .2s;
      padding: 15px 20px;
      
      a {
          color: ${colors.pink}; 
          font-size: 14pt;
      }
      
      &:hover {
        padding: 20px 25px;

        a {
          color: white;
          font-size: 16pt;
        }
        background-color: ${colors.pink};
      }
    }
  }

  .navbar {
    border-bottom: 2px solid ${colors.pink};
  }
`;

const StyledNavbarToggler = styled.div`
  @media (max-width: 767px) {
    margin: 20px;
    padding-top: 5px;
    cursor: pointer;

    div {
      transition: all 0.3s;
      background-color: ${colors.pink};
    }

    .bar1, .bar2, .bar3 {
      width: 30px;
      height: 2px;
      margin-bottom: 8px;
    }

    .animation1, .animation3 {
      width: 30px;
      height: 2px;
    }

    .animation1 {
      margin-top: 5px;
      margin-bottom: 10px;
      transform: rotate(45deg);
    }

    .animation3 {
      margin-top: -12px;
      margin-bottom: 4px;
      transform: rotate(-45deg);
    }
  }
`;


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbarContainer fluid>
      <Navbar color={colors.dark} expand='md' dark fixed='top'>
        <Container>
          <StyledNavbarToggler onClick={toggle}>
            <div className={isOpen ? 'animation1' : 'bar1'} />
            <div className={isOpen ? '' : 'bar2'} />
            <div className={isOpen ? 'animation3' : 'bar3'} />
          </StyledNavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className='w-100 justify-content-between' navbar>
              <NavItem>
                <NavLink href='#home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#who'>Who am I?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#skills'>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#projects'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#projects'>PT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StyledNavbarContainer>
  );
}

export default Header;