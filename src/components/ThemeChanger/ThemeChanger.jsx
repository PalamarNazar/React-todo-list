import { useEffect, useState } from 'react';
import './theme-changer.css';
import darkIcon from '../../assets/images/dark-theme.svg'
import lightIcon from '../../assets/images/light-theme.svg'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import PurpleButton from '../purpleButton/PurpleButton.jsx';

const ThemeKey = 'theme';
const SelectorDarkTheme = 'dark-theme';
const Dark = 'dark'
const Light = 'light'

const ThemeChanger = () => {
    const { getItem, setItem} = useLocalStorage()

    const [activeTheme, setActiveTheme] = useState(() => {
        return getItem(ThemeKey) ?? 'light';
    })

    const changeTheme = () => {
        setActiveTheme(prevActive => prevActive !== Dark ? Dark : Light);
    }

    useEffect(() => {
        setItem(ThemeKey, activeTheme)
        
        document.documentElement.classList.toggle(SelectorDarkTheme, activeTheme === Dark)
    }, [setItem, activeTheme])
    
    return (
        <PurpleButton className="todo__theme-changer theme-changer"
        onClick={changeTheme}
        aria={true}
        buttonTitle="Theme changer"
        >
            <img className="theme-changer__image" 
            src={activeTheme === Dark ? lightIcon : darkIcon} 
            alt={activeTheme === Dark ? 'Change for Light theme' : 'Change for Dark theme'} />
        </PurpleButton>
    )
}
 

export default ThemeChanger;