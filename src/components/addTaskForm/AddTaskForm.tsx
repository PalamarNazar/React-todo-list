import type { ChangeEvent, FormEvent } from 'react';
import { useTodoContext } from '../../context/TodoContext.js';
import { useUiContext } from "../../context/UiContext.js"
import Field from '../Field/Field.js';
import PurpleButton from '../PurpleButton/PurpleButton.js';
import styles from './AddTaskForm.module.scss';
import type { OnFormType, OnInputType } from '../../utils.js';

const AddTaskForm = () => {
    const {
        setNewTaskTitle,
        newTaskTitle,
        addTasks,
    } = useTodoContext();

    const {
        setIsOpenModalWin,
    } = useUiContext()

    const onSubmit = (event: OnFormType) => {
            event.preventDefault();
            addTasks(newTaskTitle)
            setIsOpenModalWin(false)
            setNewTaskTitle('');
    }

    const onReset = (event: OnFormType) => {
        event.preventDefault()
        setIsOpenModalWin(false)
    }
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="add-task" className="visually-hidden">new note</label>

            <Field id="add-task" 
            name="add-task" 
            onChange={(event: OnInputType) => setNewTaskTitle(event.target.value)} 
            value={newTaskTitle}
            placeholder="Input your note..."
            required={true} 
            />
            
            <div className={styles.buttonBox}>

                <PurpleButton className={`${styles.formButton} ${styles.buttonReset}`}
                type='reset'
                onClick={onReset}>
                Reset
                </PurpleButton>

                <PurpleButton className={styles.formButton}
                type='submit'
                disabled={newTaskTitle.trim().length === 0}>
                Apply
                </PurpleButton>

            </div>
        </form>
    )
}

export default AddTaskForm;