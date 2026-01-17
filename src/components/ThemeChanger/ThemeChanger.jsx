import darkIcon from '../../assets/images/dark-theme.svg'
import lightIcon from '../../assets/images/light-theme.svg'
import { useTheme } from '../../hooks/useTheme.js';
import PurpleButton from '../purpleButton/PurpleButton.jsx';
import styles from './ThemeChanger.module.scss';

const ThemeChanger = () => {
    const {theme, setTheme} = useTheme()
    
    return (
        <PurpleButton className={styles.button}
        onClick={setTheme}
        aria={true}
        buttonTitle="Theme changer"
        >
            <img src={theme === 'dark' ? lightIcon : darkIcon} 
            alt={theme === 'dark' ? 'Change for Light theme' : 'Change for Dark theme'} />
        </PurpleButton>
    )
}
 

export default ThemeChanger;