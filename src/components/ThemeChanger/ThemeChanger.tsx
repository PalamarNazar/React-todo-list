import { useUiContext } from '../../context/UiContext.js'
import darkIcon from '../../assets/images/dark-theme.svg'
import lightIcon from '../../assets/images/light-theme.svg'
import PurpleButton from '../PurpleButton/PurpleButton.jsx';
import styles from './ThemeChanger.module.scss';

const ThemeChanger = () => {
    const {theme, setTheme} = useUiContext()
    
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