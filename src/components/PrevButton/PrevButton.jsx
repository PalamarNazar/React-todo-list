import PurpleButton from "../purpleButton/PurpleButton";
import iconBackPage from "../../assets/images/prev-page.svg";

const PrevButton = () => {
     const onPrevPage = () => {
        window.history.back()
    }

        return (
            <PurpleButton className="todo__prev-btn" 
            type="button" 
            buttonTitle="Previos Page"
            aria={true}
            onClick={onPrevPage}>
                <img src={iconBackPage} alt="Return to previos page" className="todo__back-page" />
            </PurpleButton>
        )
    }

export default PrevButton;