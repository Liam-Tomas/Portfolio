import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 5px 0px;
  margin-left: 180px; // Space from main content
`;

const SquigglyLine = styled.hr`
  border: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="20" viewBox="0 0 100 20"><path d="M0,10 c20,-10 40,10 60,0 s40,-10 60,0" fill="none" stroke="#000" stroke-width="1.5"/></svg>');
  background-repeat: repeat-x;
  background-size: 100% 20px; // Adjust size as needed
  height: 0px;
`;

const FooterContent = styled.div`
  padding-top: 0px;
  color: ${props => props.theme.card}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SquigglyLine />
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Created and Designed by Liam Armstrong</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
