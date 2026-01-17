import PurpleButton from "../purpleButton/PurpleButton";
import iconBackPage from "../../assets/images/prev-page.svg";
import styles from "./PrevButton.module.scss"

const PrevButton = () => {
        return (
            <PurpleButton className={styles.button} 
            type="button" 
            buttonTitle="Previous Page"
            aria={true}
            onClick={() => window.history.back()}>
                <img src={iconBackPage} alt="Return to previous page" />
            </PurpleButton>
        )
    }

export default PrevButton;