import icon from '../../assets/images/plus.svg'
import { useContext } from 'react';
import { UiContext } from '../../context/UiContext.js';
import PurpleButton from '../PurpleButton/PurpleButton.js';
import styles from './AddTask.module.scss';


const AddTask = () => {
    const { setIsOpenModalWin } = useContext(UiContext)

    return (
        <PurpleButton className={styles.buttonAdd}
        onClick={() => setIsOpenModalWin(true)}
        buttonTitle='Add task'
        >
            <img 
            src={icon} 
            alt="Add Task"  
            width="24"
            height="24"
            />
        </PurpleButton>

    )
}

export default AddTask;