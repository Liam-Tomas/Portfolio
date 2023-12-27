import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyButton from '../components/utility/Button';
import PlantGreenIMG from '../images/plantGreenIMG.jpeg';
import PlantGreenDarkIMG from '../images/plantGreenDarkIMG.jpeg';
import { useTheme } from 'styled-components';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const MainContainer = styled.div`
  margin: 11px 11px 11px 12px;
  padding-left: 30px;
  padding-right: 360px;
  color: ${props => props.theme.text};
  position: relative; // Needed for absolute positioning of overlay
  min-height: 50vh;
  margin-bottom: 60px;
  display: flex; 
  flex-direction: column;
//   align-items: center;
  justify-content: center;
   background: ${(props) =>
        props.theme.mode === 'dark'
            ? `url(${PlantGreenDarkIMG})`
            : `url(${PlantGreenIMG})`};
  border-radius: 25px;
  background-size: cover;
  background: ${props => props.theme.cardLight};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.mode === 'dark'
        ? 'rgba(0, 0, 0, 0.0)'  // Dark overlay for dark mode
        : 'rgba(255, 255, 255, 0.0)'};  // Light overlay for light mode
      border-radius: 25px;
      z-index: 1;  // Ensure the overlay is above the background
  }
  @media (max-width: 868px) {
    align-items: '';
    padding: 0px;
    margin-top: 70px;
    width: 94%;
    min-height: 37vh;

  }

`;


const ContentContainer = styled.div`
  position: relative; // Position relative to stack above the overlay
  z-index: 2; // Higher z-index than the overlay
  display: flex;
  flex-direction: column;

`;


const HomeHeader = styled.div`
    padding: 3rem;
    margin: 0px 10px;
    z-index: 2; // Add a higher z-index
 
    @media (max-width: 868px) {
        margin: 0px 0px;
        text-align: left;
    }
`

const HomeTitle = styled.h1`
    font-size: 88px;
    letter-spacing: -1px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 500;
    @media (max-width: 868px) {
        font-size: 2.8rem;
        margin-top: 20px;
    }
`

const HomeSubText = styled.p`
    color: ${props => props.theme.textAlt};
    font-weight: 400;
    font-size: 22px;
    line-height:1.5;
    letter-spacing: -1px;
    margin: 10px 0px 25px 0px;

    @media (max-width: 868px) {
        font-size: 1.1rem;
        margin-top: 15px;

    }`

const HomeTopText = styled.p`
    color: ${props => props.theme.primary};
    font-weight: 500;
    font-size: 22px;
    line-height:1.5;
    letter-spacing: -1px;
    margin: 0px;
    margin-bottom: 20px;

    @media (max-width: 868px) {
        font-size: 1.1rem;
        margin-top: 15px;

}`

const MyButtonContainer = styled.p`
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 10px
`




function AboutPage({ themeVariant }) {
    const theme = useTheme();

    return (
        <div>
            <ContentContainer>
                <MainContainer>
                    <HomeHeader>
                        {/* <HomeTopText>Hi, my name is</HomeTopText> */}
                        <HomeTitle>Resume</HomeTitle>
                        <HomeSubText>Click the link below to view PDF version of my resume.</HomeSubText>
                        <MyButtonContainer>
                            <MyButton padding="16px 20px" fontSize="1.1rem" icon={faFilePdf}>
                                Resume
                            </MyButton>
                            {/* <MyButton padding="16px 20px" fontSize="1.1rem" icon={faLinkedin} color={theme.text} backgroundColor={theme.buttonHoverBackground} hoverBackgroundColor={theme.buttonHoverSecondary}>
                                LinkedIn
                            </MyButton> */}
                        </MyButtonContainer>
                    </HomeHeader>
                </MainContainer>
            </ContentContainer>
        </div >
    );
}
export default AboutPage;

