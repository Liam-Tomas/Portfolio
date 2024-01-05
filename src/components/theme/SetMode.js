import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('dark'); // Default to 'dark'

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        // If localTheme is found, set it, otherwise default to 'dark'
        localTheme ? setTheme(localTheme) : setMode('dark');
    }, []);
    
    return [theme, themeToggler];
};
