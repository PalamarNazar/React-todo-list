import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx"
import { useRef } from 'react';
import { useUiContext } from '../../context/UiContext.jsx';
import { useTodoContext } from "../../context/TodoContext.js";
import { useFocusTrap } from '../../hooks/useFocusTrap.js';
import styles from './ModalWin.module.scss';

const ModalWin = () => {
    const { isOpenModalWin, setIsOpenModalWin } = useUiContext()

    const {
        newTaskTitle,
    } = useTodoContext()

    const modal = useRef(null);

    useFocusTrap(modal, isOpenModalWin, setIsOpenModalWin, newTaskTitle);

    if (!isOpenModalWin) return null;

    return (
        <div className={styles.wrapper}
            id='modal' 
            role='dialog'
            aria-modal={true}
            aria-labelledby='modal-title'>
            <div className={styles.modal} 
            ref={modal}>
                <h2 className={styles.modalTitle} id='modal-title'>New Note</h2>
                <AddTaskForm />  
            </div>
        </div>
    )
}

export default ModalWin;
