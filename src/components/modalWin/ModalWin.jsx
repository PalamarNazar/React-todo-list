<<<<<<< HEAD
import AddTaskForm from "../AddTaskForm/AddTaskForm"
=======
import AddTaskForm from '../addTaskForm/AddTaskForm.jsx';
>>>>>>> 6e2aabd7afd47c7441fe6614cc2a4c85f98d24bb
import { useContext, useRef } from 'react';
import { UiContext } from '../../context/UiContext.jsx';
import { useFocusTrap } from '../../hooks/useFocusTrap.js';
import styles from './ModalWin.module.scss';

const ModalWin = () => {
    const { isOpenModalWin, setIsOpenModalWin } = useContext(UiContext);

    const modal = useRef(null);
    useFocusTrap(modal, isOpenModalWin, setIsOpenModalWin);
    
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
