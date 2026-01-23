import { useEffect, useState } from 'react';
import { type Theme, type UseThemeReturn } from "../utils.js"
import { useLocalStorage } from './useLocalStorage.js';

const ThemeKey: "theme" = 'theme';
const SelectorDarkTheme: "dark-theme" = 'dark-theme';
const dark: "dark" = "dark"; 
const light: "light" = "light"; 


export const useTheme = (): UseThemeReturn => {
    const { getItem, setItem } = useLocalStorage()

    const [activeTheme, setActiveTheme] = useState<Theme>(() => {
        return getItem(ThemeKey) === dark ? dark : light;
    })

    useEffect(() => {
        setItem(ThemeKey, activeTheme)
        
        document.documentElement.classList.toggle(SelectorDarkTheme, activeTheme === dark)
    }, [activeTheme])

    const setTheme = () => {
        setActiveTheme(prevActive => prevActive !== dark ? dark : light);
    }

    return {
        theme: activeTheme,
        setTheme,
    }
}