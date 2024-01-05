import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  padding: 10px;
  margin: 10px;
  background: white;
  border: 1px solid gray;
`;

const ThemeSelector = ({ setColorScheme, themeToggler, setMode, currentTheme }) => {
    const handleThemeChange = (e) => {
        const value = e.target.value;
        let [color, mode] = value.split('-');
    

        setColorScheme(color);
        if (currentTheme !== mode) {
          themeToggler();
        }
    };

  return (
    <Dropdown onChange={handleThemeChange}>
      <option value="green-light">Green Light</option>
      <option value="green-dark">Green Dark</option>
      <option value="red-light">Red Light</option>
      <option value="red-dark">Red Dark</option>
      <option value="blue-light">Blue Light</option>
      <option value="blue-dark">Blue Dark</option>
      <option value="grey-light">Grey Light</option>
      <option value="grey-dark">Grey Dark</option>
    </Dropdown>
  );
};

export default ThemeSelector;
