import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { UiContext } from "../../context/UiContext.jsx"
import Field from '../Field/Field.jsx';
import PurpleButton from '../purpleButton/PurpleButton';
import styles from './AddTaskForm.module.scss';

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
            setIsOpenModalWin(false)
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="add-task" className="visually-hidden">new note</label>

            <Field id="add-task" 
            name="add-task" 
            onInput={(event) => setNewTaskTitle(event.target.value)} 
            value={newTaskTitle}
            placeholder="Input your note..."
            required={true} 
            />
            
            <div className={styles.buttonBox}>

                <PurpleButton className={`${styles.formButton} ${styles.buttonReset}`}
                type='reset'
                onClick={() => setIsOpenModalWin(false)}>
                Reset
                </PurpleButton>

                <PurpleButton className={styles.formButton}
                type='submit'>
                Apply
                </PurpleButton>

            </div>
        </form>
    )
}

export default AddTaskForm;