import './modal-win.css';
import AddTaskForm from '../addTaskForm/AddTaskForm';
import { useContext, useRef } from 'react';
import { UiContext } from '../../context/TodoContext';
import { useFocusTrap } from '../../hooks/useFocusTrap.js';

const ModalWin = () => {
    const { isOpenModalWin, setIsOpenModalWin } = useContext(UiContext);

    const modal = useRef(null);
    useFocusTrap(modal, isOpenModalWin, setIsOpenModalWin);

    if (!isOpenModalWin) return;
    
    return (
        <div className={`modal-win__wrapper ${isOpenModalWin ? 'is-open' : ''}`}>
            <div className="modal-win" id='modal' 
            role='dialog'
            aria-modal={true}
            aria-labelledby='modal-title'
            ref={modal}>
                <h2 className="modal-win__title" id='modal-title'>New Note</h2>
                <AddTaskForm />  
            </div>
        </div>
    )
}

export default ModalWin;