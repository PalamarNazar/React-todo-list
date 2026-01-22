import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const ThemeKey = 'theme';
const SelectorDarkTheme = 'dark-theme';

export const useTheme = () => {
    const { getItem, setItem} = useLocalStorage()

    const [activeTheme, setActiveTheme] = useState(() => {
        return getItem(ThemeKey) ?? 'light';
    })

    useEffect(() => {
        setItem(ThemeKey, activeTheme)
        
        document.documentElement.classList.toggle(SelectorDarkTheme, activeTheme === 'dark')
    }, [setItem, activeTheme])

    const setTheme = () => {
        setActiveTheme(prevActive => prevActive !== 'dark' ? 'dark' : 'light');
    }

    return {
        theme: activeTheme,
        setTheme,
    }
}