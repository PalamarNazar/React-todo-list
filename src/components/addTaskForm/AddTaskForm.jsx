import { useContext } from 'react';
import './add-task-form.css';
import { TodoContext, UiContext } from '../../context/TodoContext';
import Field from '../field/Field';
import PurpleButton from '../purpleButton/PurpleButton';

const AddTaskForm = () => {
    const {
        setNewTaskTitle,
        newTaskTitle,
        addTasks
    } = useContext(TodoContext)

    const {
        setIsOpenModalWin,
    } = useContext(UiContext)

    const onSubmit = (event) => {
        event.preventDefault();
        addTasks()
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <label htmlFor="add-task" className="visually-hidden">new note</label>

            <Field className="add-form__input"
            id="add-task" name="add-task" 
            onInput={(event) => setNewTaskTitle(event.target.value)} 
            value={newTaskTitle}
            placeholder="Input your note..."
            required={true} 
            />
            
            <div className="add-form__button-box">

                <PurpleButton className="add-form__button button-cancel"
                type='reset'
                onClick={() => setIsOpenModalWin(false)}>
                Reset
                </PurpleButton>

                <PurpleButton className="add-form__button button-apply"
                type='submit'>
                Apply
                </PurpleButton>

            </div>
        </form>
    )
}

export default AddTaskForm;