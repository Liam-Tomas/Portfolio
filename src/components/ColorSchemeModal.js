// ColorSchemeModal.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'

// Define background colors based on your theme
const backgroundColors = {
    green: (props) => props.theme.greenColor,
    red: (props) => props.theme.redColor,
    grey: (props) => props.theme.greyColor,
    blue: (props) => props.theme.blueColor
};

const ModalBackdrop = styled.div`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: absolute;
  background-color: ${props => props.theme.backgroundColor};
  width: 100px; // Circular modal width
  height: 100px; // Circular modal height to maintain the circle shape
  padding: 22px;
  border-radius: 50%; // Circular shape
  box-shadow: 3px 1px 15px 0px rgba(0, 0, 0, 0.2);
  top: 185px;
  left: 70px;
  display: grid;
  align-items: center;
  justify-content: center;

  // Speech bubble tail
  &::after {
    content: '';
    position: absolute;
    left: -15px; // Adjust for tail to seamlessly connect to the circle from the left
    top: 50%; // Center the tail vertically
    border-width: 15px 20px 15px 0; // Adjust triangle size
    border-style: solid;
    border-color: transparent ${props => props.theme.backgroundColor} transparent transparent;
    transform: translateY(-50%);
  }

  @media (max-width: 868px) {
    top: 192px;
    left: 150px;
  }
`;



const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px; // Adjust the size as needed
  opacity: 0.1; // Adjust the opacity as needed
  z-index: -1;
`;


const ColorOption = styled.button`
  background-color: ${(props) => backgroundColors[props.color](props)};
  color: ${props => props.theme.textOpp};
  padding: 20px;
  margin: 0px 5px;
  border: none;
  border-radius: 50%;

  cursor: pointer;

`;

const ColorSwatch = styled.div`
`

const TopRow = styled.div`

`

const BottomRow = styled.div`
`

const ColorSchemeModal = ({ isModalOpen, toggleModal, setColorScheme }) => {
    const handleColorChange = (color) => {
        setColorScheme(color);
        toggleModal();
    };

    return (
        <ModalBackdrop $show={isModalOpen} onClick={toggleModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <TopRow>
                        <ColorOption color="green" onClick={() => handleColorChange('green')}></ColorOption>
                        <ColorOption color="red" onClick={() => handleColorChange('red')}></ColorOption>
                    </TopRow>
                    <BottomRow>
                        <ColorOption color="grey" onClick={() => handleColorChange('grey')}></ColorOption>
                        <ColorOption color="blue" onClick={() => handleColorChange('blue')}></ColorOption>

                    </BottomRow>
            </ModalContainer>
        </ModalBackdrop>
    );
};

export default ColorSchemeModal;
