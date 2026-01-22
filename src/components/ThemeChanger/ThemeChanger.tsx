import { useContext } from 'react';
import { UiContext } from '../../context/UiContext.js'
import darkIcon from '../../assets/images/dark-theme.svg'
import lightIcon from '../../assets/images/light-theme.svg'
import PurpleButton from '../purpleButton/PurpleButton.js';
import styles from './ThemeChanger.module.scss';

const ThemeChanger = () => {
    const {theme, setTheme} = useContext(UiContext)
    
    return (
        <PurpleButton className={styles.button}
        onClick={setTheme}
        aria-label="Theme-changer"
        buttonTitle="Theme changer"
        >
            <img src={theme === 'dark' ? lightIcon : darkIcon} 
            alt={theme === 'dark' ? 'Change for Light theme' : 'Change for Dark theme'} />
        </PurpleButton>
    )
}
 

export default ThemeChanger;