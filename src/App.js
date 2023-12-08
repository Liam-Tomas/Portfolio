import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/utility/NavBar';
import HomePage from './pages/HomePage';
import { GlobalStyles } from './components/theme/GlobalStyles';
import { useDarkMode } from './components/theme/SetMode';
import { lightTheme, darkTheme } from './components/theme/CustomColors';
import AboutPage from './pages/AboutPage'

const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 85px;

  @media (max-width: 868px) {
    margin-left: 0px;
  }
`;

function App() {
  const [theme, themeToggler] = useDarkMode(); // Use the custom hook
  const currentTheme = theme === 'light' ? lightTheme : darkTheme; // Determine the current theme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
        <FlexContainer>
          <Navbar theme={theme} toggleTheme={themeToggler} />
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </MainContent>
        </FlexContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
