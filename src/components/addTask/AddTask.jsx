import './add-task.css';
import icon from '../../assets/images/plus.svg'
import { useContext } from 'react';
import { UiContext } from '../../context/TodoContext';
import PurpleButton from '../purpleButton/PurpleButton';


const AddTask = () => {
    const { setIsOpenModalWin } = useContext(UiContext)

    return (
        <PurpleButton className="todo__add-task add-task"
        onClick={() => setIsOpenModalWin(true)}
        buttonTitle='Add task'
        >
            <img className="add-task__image" 
            src={icon} 
            alt="Add Task"  
            width="24"
            height="24"
            />
        </PurpleButton>

    )
}

export default AddTask;