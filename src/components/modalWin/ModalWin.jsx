import AddTaskForm from '../AddTaskForm/AddTaskForm.jsx';
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
        <div className={`${styles.wrapper} ${isOpenModalWin ? styles.isOpen : ''}`}>
            <div className={styles.modal} id='modal' 
            role='dialog'
            aria-modal={true}
            aria-labelledby='modal-title'
            ref={modal}>
                <h2 className={styles.modalTitle} id='modal-title'>New Note</h2>
                <AddTaskForm />  
            </div>
        </div>
    )
}

export default ModalWin;