import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
// margin: 30px 110px 0px 110px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${props => props.theme.buttonHoverBackground};
  margin: 10px 0px 10px 0px;
`;

const FooterContent = styled.div`
  padding: 10px 5px;
  font-weight: 450;
  font-size: 16px;
  color: ${props => props.theme.buttonHoverBackground};

  @media (max-width: 868px) {
    font-size: .75rem;
  }
`;

const FooterFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media (max-width: 868px) {
        padding: 0px 20px;
      }

`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.4rem;
    color: ${props => props.theme.buttonHoverBackground};

`

const FooterText = styled.p`

`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Divider />
                <FooterFlex>
                    <FooterText>&copy; {new Date().getFullYear()} Created and Designed by Liam Armstrong; ltarmstrong94@gmail.com</FooterText>
                    <StyledIcon icon={faGithub} />
                </FooterFlex>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
