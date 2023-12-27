import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/utility/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { GlobalStyles } from './components/theme/GlobalStyles';
import { useDarkMode } from './components/theme/SetMode';
import { lightTheme, darkTheme, redLightTheme, redDarkTheme, lightGreyTheme, darkGreyTheme } from './components/theme/CustomColors';
import Footer from './components/utility/Footer';
import ScrollToTop from './components/utility/ScrollToTop';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column; // Change to column
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 85px; // Adjust as needed

  @media (max-width: 868px) {
    margin-left: 0px;
  }
`;

function App() {
  const [theme, themeToggler] = useDarkMode(); // Use the custom hook
  const [colorScheme, setColorScheme] = useState(''); // New state for color scheme

  // Determine the current theme based on both theme and color scheme
  let currentTheme;
  if (theme === 'light') {
    switch (colorScheme) {
      case 'green':
        currentTheme = lightTheme;
        break;
      case 'red':
        currentTheme = redLightTheme;
        break;
      default:
        currentTheme = lightGreyTheme;
    }
  } else {
    switch (colorScheme) {
      case 'green':
        currentTheme = darkTheme;
        break;
      case 'red':
        currentTheme = redDarkTheme;
        break;
      default:
        currentTheme = darkGreyTheme;
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
      <ScrollToTop />
        <FlexContainer>
          <Navbar theme={theme} toggleTheme={themeToggler} setColorScheme={setColorScheme} />
          <ContentContainer>
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ...other routes... */}
              </Routes>
            </MainContent>
          </ContentContainer>
          <Footer /> {/* Footer is now within the ContentContainer */}

        </FlexContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;