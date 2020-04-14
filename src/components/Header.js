import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import AppContext from './AppContext';
import data from '../helpers/data.json';
import { colors, breakpoints } from '../helpers/styles';

const StyledNavbarContainer = styled(Container)`
  font-family: 'Quicksand', sans-serif;
  .navbar {
    background-color: ${colors.dark};
    padding: 0;

    .nav-item {
      a {
        transition: all .2s;
        padding: 15px 20px;
        color: ${colors.pink}; 
        font-size: 14pt;
      }
      
      &:hover:not(.mobile-language-button) {
        background-color: ${colors.pink};
        a {
          color: ${colors.light};
          font-size: 16pt;
          padding: 20px 25px;
        }
      }

      &:focus {
        outline: none;
      }
    }

    .mobile-language-button {
      position: absolute;
      right: 5px;
      top: 5px;
      list-style: none;
    }
  }

  .navbar {
    border-bottom: 2px solid ${colors.pink};
  }
`;

const StyledNavbarToggler = styled.div`
  @media (max-width: ${breakpoints.mobileMax}) {
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

const Header = () => {
  const { language, toggleLanguage, mobile } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => mobile ? setIsOpen(!isOpen) : false;

  return (
    <StyledNavbarContainer fluid>
      <Navbar color={colors.dark} expand='lg' fixed='top'>
        <Container>
          <StyledNavbarToggler onClick={toggle}>
            <div className={isOpen ? 'animation1' : 'bar1'} />
            <div className={isOpen ? '' : 'bar2'} />
            <div className={isOpen ? 'animation3' : 'bar3'} />
          </StyledNavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className='w-100 justify-content-between' navbar>
              {
                data[language].header.map((nav, key) => {
                  return (
                    <NavItem key={key}>
                      <NavLink href={nav.link} onClick={toggle}>{nav.text}</NavLink>
                    </NavItem>
                  );
                })
              }

              <NavItem
                className='d-none d-md-block'
                onClick={() => toggleLanguage()}
              >
                <NavLink href='#'>
                  {language === 'en' ? 'PT' : 'EN'}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavItem
            className='d-md-none mobile-language-button'
            onClick={() => toggleLanguage()}
          >
            <NavLink href='#'>
              {language === 'en' ? 'PT' : 'EN'}
            </NavLink>
          </NavItem>
        </Container>
      </Navbar>
    </StyledNavbarContainer>
  );
}

export default Header;