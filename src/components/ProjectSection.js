import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';
import MyButton from '../components/utility/Button';
import projectOneIMG from '../images/projectOneIMG.jpg'
import projectOneDarkIMG from '../images/projectOneDarkIMG.jpg'
import projectTwoIMG from '../images/projectTwoIMG.jpg'
import projectTwoDarkIMG from '../images/projectTwoDarkIMG.jpg'
import DSIMG from '../images/DSIMG.jpg'
import DSIMGLight from '../images/DSIMGLight.jpg'
import SFMapLightIMG from '../images/SFMapLightIMG.png'
import SFMapDarkIMG from '../images/SFMapDarkIMG.png'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ContentContainer = styled.div`
    margin: 0px 130px;
    overflow-x: hidden;
    box-sizing: border-box; // Ensure padding is included in the width calculation

    @media (max-width: 868px) {
        margin: 0 auto; // Automatically adjust margins to center the container
        padding: 0px;
        width: 88%;
    }

`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
    min-height: 212vh;

    @media (max-width: 868px) {
        gap: 40px;
        min-height: 175vh;

    }
`;

const ProjectGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;

    @media (max-width: 868px) {
        margin: 0px 0px;
        padding: 0px
        align-items: center;
    }
`;

const ProjectGrid2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 868px) {
        align-items: flex-start;

    }
`;

const DescriptionContainer = styled.div`
    background-color: #1976D2; // Example blue color
    background: ${props => props.theme.cardLight};
    padding: 24px 25px;
    margin-right: -350px; // Negative margin to extend into the right container
    border-radius: 10px;
    max-width: 650px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;    
    transition: background-color 0.15s ease, border-radius 0.3s ease;
    z-index: 1; // Ensure it's above the image

    @media (max-width: 868px) {
        max-width: 400px;

        padding: 24px 15px;
        margin-right: 0; // Reset margin for smaller screens
    }
`;

const DescriptionContainer2 = styled.div`
    background-color: #1976D2; // Example blue color
    background: ${props => props.theme.cardLight};
    padding: 24px 25px;
    border-radius: 5px;
    max-width: 650px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;    
    transition: background-color 0.15s ease, border-radius 0.3s ease;
    z-index: 1; // Ensure it's above the image
    margin-left: -280px; // Negative margin to extend into the left container
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;    
    @media (max-width: 868px) {
        max-width: 400px;
        padding: 24px 15px;
        margin-left: 0; // Reset margin for smaller screens
    }
`;


const ItemHeader = styled.h3`
    color: ${props => props.theme.text};
    margin-right: -250px; // Negative margin to extend into the right container
    font-weight: 600;
    font-size: 1.75rem;
    margin-top: 5px;
    @media (max-width: 868px) {
        margin-right: 0px;
        font-size: 1.55rem;


    }

`

const ProjectTopHeader = styled.p`
    margin: 0px;
    margin-bottom: 16px;
    color: ${props => props.theme.primary};
    padding: 0px;
`

const ItemHeader2 = styled.h3`
    color: ${props => props.theme.text};
    font-weight: 600;
    margin-left: -250px; // Negative margin to extend into the right container
    font-size: 1.75rem;
    @media (max-width: 868px) {
        margin-left: 0px;
        font-size: 1.55rem;

    }
    

`

const ItemText = styled.p`
    color: ${props => props.theme.text};
    margin: 0px;
    font-size: 1.1rem;

`

const MyButtonContainer = styled.p`
    display: flex;
    margin: 0px 0px;
    align-items: center;
    // justify-content: center;
    gap: 10px
`

const ViewMoreContainer = styled.div`
    display: flex;
    margin: 0px 0px;
    align-items: center;
    justify-content: center;
    gap: 10px
`

const MyButtonContainer2 = styled.p`
    display: flex;
    margin: 0px 0px;
    align-items: flex-end;
    align-items: center;
    // justify-content: center;
    gap: 10px
`

const ProjectHeader = styled.h2`
    margin-bottom: 10px;
    color: ${props => props.theme.text};
    font-size: 60px;
    font-weight: 600;
    @media (max-width: 868px) {
        font-size: 36px;
        margin-bottom: 0px;
    }
`



const ProjectTwoIMG = styled.div`
    width: 100%;
    height: 325px; // Set a specific height for the image
    background: url(${(props) => props.theme.mode === 'dark' ? projectTwoDarkIMG : projectTwoIMG}) no-repeat center center;
    background-size: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    @media (max-width: 868px) {
        width: 100%;
        display: none;
      }
`;

const ProjectThreeIMG = styled.div`
    width: 100%;
    height: 320px; // Set a specific height for the image
    background: url(${(props) => props.theme.mode === 'dark' ? DSIMG : DSIMGLight}) no-repeat center center;
    background-size: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    @media (max-width: 868px) {
        width: 100%;
        display: none;
    
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.overlayColor};
  transition: opacity 0.3s ease;
`;

const Overlay2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.overlayColor};
    transition: opacity 0.3s ease;
`;


const IMGContainer3 = styled.div`
    position: relative;
    width: 45%;
    border-radius: 10px;
    overflow: hidden; 
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 7px 0px;
    background: ${props => props.theme.cardLight};
    &:hover ${ProjectThreeIMG} {
    filter: none; // Reveal the color on hover
    }

    &:hover ${Overlay2} {
    opacity: .3; // Hide the overlay on hover

    }

    &:hover  {
    cursor: pointer;

    }

    @media (max-width: 868px) {
    width: 100%;
    display: none;
    }
`;

const ProjectIMG2 = styled.div`
    width: 100%;
    height: 325px; // Set a specific height for the image
    background: url(${(props) => props.theme.mode === 'dark' ? SFMapDarkIMG : SFMapLightIMG}) no-repeat center center;
    background-size: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    @media (max-width: 868px) {
        width: 100%;
        display: none;
      }

`;

const IMGContainer2 = styled.div`
    position: relative;
    width: 50%;
    border-radius: 10px;
    overflow: hidden; 
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 7px 0px;
    background: ${props => props.theme.cardLight};
   
    &:hover ${ProjectIMG2} {
        filter: none; // Reveal the color on hover
    }

    &:hover ${Overlay2} {
        opacity: .3; // Hide the overlay on hover
    }

    &:hover  {
        cursor: pointer;
    }

    @media (max-width: 868px) {
        width: 100%;
        display: none;
    }
`;

const IMG2Container = styled.div`
    position: relative;
    width: 49%; // Adjust width as necessary
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 7px 0px;
    background: ${props => props.theme.cardLight};
    &:hover ${ProjectTwoIMG} {
    filter: none; // Reveal the color on hover
    }

    &:hover ${Overlay} {
    opacity: .3; // Hide the overlay on hover

    }

    &:hover  {
    cursor: pointer;

    }

    @media (max-width: 868px) {
        width: 100%;
        display: none;

    }

`;



const MainProjectContainer = styled.div`
    display: flex;
    position: relative; // Parent container positioned relatively
    gap: 250px;

    @media (max-width: 868px) {
        flex-direction: column;
        gap: 0px;

    }

`
const MainProjectContainer2 = styled.div`
    display: flex;
    position: relative; // Parent container positioned relatively
    gap: 180px;

    @media (max-width: 868px) {
        flex-direction: column;
        gap: 0px;

    }



`
const TechFlex = styled.div`
    display: flex;
    gap: 15px;
    margin-right: -160px; // Negative margin to extend into the right container
    color: ${props => props.theme.textAlt};

    @media (max-width: 868px) {
        margin: 0px;
    }

`

const TechFlex2 = styled.div`
    display: flex;
    gap: 15px;
    margin-left: -160px; // Negative margin to extend into the right container
    color: ${props => props.theme.textAlt};

    @media (max-width: 868px) {
        margin: 0px;

    }

`
const HomeSubText = styled.p`
    color: ${props => props.theme.text};
    font-weight: 400;
    font-size: 22px;
    line-height:1.5;
    letter-spacing: -1px;
    margin: 0px;
    margin-bottom: 70px;

    @media (max-width: 868px) {
        font-size: 1.1rem;
        margin-top: 5px;
        margin-bottom: 25px;
    }
`

const SquigglyLine = ({ color = 'black', width = 2 }) => (
    <svg width="100%" height="20" viewBox="0 0 2000 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,10 Q25,-10 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10 T550,10 T600,10 T650,10 T700,10 T750,10 T800,10 T850,10 T900,10 T950,10 T1000,10 T1050,10 T1100,10 T1150,10 T1200,10 T1250,10 T1300,10 T1350,10 T1400,10 T1450,10 T1500,10 T1550,10 T1600,10 T1650,10 T1700,10 T1750,10 T1800,10 T1850,10 T1900,10 T1950,10 T2000,10" stroke={color} fill="none" strokeWidth={width} />
    </svg>
);




function ProjectSection() {
    const theme = useTheme();

    return (
        <ContentContainer>

            <ProjectHeader>My Work</ProjectHeader>
            <HomeSubText>Check out some of my recent projects.</HomeSubText>

            <ProjectContainer>
                <MainProjectContainer>
                    <ProjectGrid>
                        <ProjectTopHeader>
                            Featured Project
                        </ProjectTopHeader>
                        <ItemHeader>SF Crime Geospatial Analysis</ItemHeader>
                        <DescriptionContainer>
                            <ItemText>
                                This project represents an advanced analysis of incident data reported by the San Francisco Police Department (SFPD), focused on creating an interactive application for users to understand local crime dynamics. My approach both visualizes and quantifies crime patterns across SF, combining advanced data analysis with a practical, user-centric application.
                            </ItemText>
                        </DescriptionContainer>
                        <TechFlex>
                            <p>Python</p>
                            <p>Javascript</p>
                            <p>React</p>
                            <p>GeoPandas</p>
                            <p>SQL</p>
                        </TechFlex>
                        <MyButtonContainer>
                            <a href="https://www.sfcrimemap.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <MyButton>Live</MyButton>
                            </a>
                            <a href="https://github.com/Liam-Tomas/sfpd_theft_project" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <MyButton color={theme.secondary} backgroundColor={theme.buttonHoverBackground} hoverBackgroundColor={theme.buttonHoverSecondary}>
                                    GitHub
                                </MyButton>
                            </a>
                        </MyButtonContainer>
                    </ProjectGrid>
                    <IMGContainer2>
                        <a href="https://www.sfcrimemap.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <ProjectIMG2 />
                            <Overlay2 />
                        </a>
                    </IMGContainer2>
                </MainProjectContainer>

                <SquigglyLine color={theme.buttonHoverBackground} />  {/* Squiggly line divider */}

                <MainProjectContainer>
                    <ProjectGrid>
                        <ProjectTopHeader>
                            Web Development
                        </ProjectTopHeader>
                        <ItemHeader>Recipe Finder Full Stack App</ItemHeader>
                        <DescriptionContainer>
                            <ItemText>
                                Designed and Implemented a web-based recipe platform w/ Express.js for backend operations and React.js for UI. It employs MongoDB for data storage, with features like recipe creation, user favorites, and recipe search through the Spoonacular API. Firebase facilitates user authentication, while styling and theming are achieved using MUI and styled-components.                            </ItemText>
                        </DescriptionContainer>
                        <TechFlex>
                            <p>React</p>
                            <p>Javascript</p>
                            <p>Mongodb</p>
                            <p>Node</p>
                            <p>Express</p>
                        </TechFlex>
                        <MyButtonContainer>
                            <a href="https://recipe-finder-foodhub.netlify.app/favorites" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <MyButton>Live</MyButton>
                            </a>
                            <a href="https://github.com/Liam-Tomas/Recipe-Finder-App" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <MyButton color={theme.secondary} backgroundColor={theme.buttonHoverBackground} hoverBackgroundColor={theme.buttonHoverSecondary}>
                                    GitHub
                                </MyButton>
                            </a>
                        </MyButtonContainer>
                    </ProjectGrid>
                    <IMG2Container>
                        <a href="https://www.sfcrimemap.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <ProjectTwoIMG />
                            <Overlay />
                        </a>
                    </IMG2Container>
                </MainProjectContainer>

                <SquigglyLine color={theme.buttonHoverBackground} />  {/* Squiggly line divider */}

                <MainProjectContainer>
                    <ProjectGrid>
                        <ProjectTopHeader>
                            Student Project
                        </ProjectTopHeader>
                        <ItemHeader>Data Structures Portfolio</ItemHeader>
                        <DescriptionContainer>
                            <ItemText>
                                Studied and implemented a comprehensive set of data structures in Python as part of my computer science curriculum. This collection encompasses essential structures such as Linked Lists, Stacks, and HashMaps, highlighting my hands-on experience with core algorithms and practical data manipulation techniques.
                            </ItemText>
                        </DescriptionContainer>
                        <TechFlex>
                            <p>Python</p>
                            <p>Data Structures</p>
                            <p>Alogrithms</p>
                        </TechFlex>
                        <MyButtonContainer>
                            <a href="https://github.com/Liam-Tomas/Data-Structures-Portfolio" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <MyButton color={theme.secondary} backgroundColor={theme.buttonHoverBackground} hoverBackgroundColor={theme.buttonHoverSecondary}>
                                    GitHub
                                </MyButton>
                            </a>
                        </MyButtonContainer>
                    </ProjectGrid>
                    <IMGContainer3>
                        <a href="https://github.com/Liam-Tomas/Data-Structures-Portfolio" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <ProjectThreeIMG />
                            <Overlay2 />
                        </a>
                    </IMGContainer3>
                </MainProjectContainer>
                <ViewMoreContainer>
                    <a href="https://github.com/Liam-Tomas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

                        <MyButton padding="14px 20px"
                            fontSize="18px"
                            color={theme.text}
                            backgroundColor={theme.buttonHoverBackground}
                            hoverBackgroundColor={theme.buttonHoverSecondary}>View More
                        </MyButton>
                    </a>
                </ViewMoreContainer>
            </ProjectContainer>
        </ContentContainer>
    );
}
export default ProjectSection;

