import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // for solid icons

const StyledSun = styled(SunIcon)`
    width: 24px;
    padding: 10px 13px;
    height: 30px;
    color: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.buttonHoverBackground};
    border-radius: 50%;
    transition: 0.2s ease-in;
    &:hover {
        color: ${props => props.theme.primary};

    }
  }
`

const StyledMoon = styled(MoonIcon)`
    width: 24px;
    padding: 10px 13px;
    height: 30px;
    color: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.buttonHoverBackground};
    border-radius: 50%;
    transition: 0.2s ease-in;
    &:hover {
        color: ${props => props.theme.primary};
    }


  }
`

const ToggleContainer = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;
  display: flex;
  margin-bottom: 40px;
  // align-items: center;
  border-radius: 50%;
  // justify-content: center;
  flex-direction: column;
  transition: background-color 0.6s, box-shadow 0.3s;
  overflow: hidden;
  
    &:active {
        transform: scale(0.95);
    }
    @media (max-width: 868px) {
      margin-bottom: 400px;
    }
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
      <ToggleContainer theme={theme} onClick={toggleTheme}>
        {theme === "light" ?
          <StyledSun className="icon-sun" /> :
          <StyledMoon className="icon-moon" />
        }
      </ToggleContainer>
    );
  };
  

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
