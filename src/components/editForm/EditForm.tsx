import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext.js";
import Field from "../Field/Field.js";
import PurpleButton from "../PurpleButton/PurpleButton.js";
import styles from './EditForm.module.scss'

const EditForm = (props) => {

    const { id } = props;

    const { 
            editingTaskTitle,
            setEditingTaskTitle,
            editInputRef,
            editTaskApply
        } = useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        editTaskApply(id, editInputRef.current.value)
    }

    return (
    <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="edit-field" className='visually-hidden'>Edit Title</label>

        <Field
        id="edit-field"
        value={editingTaskTitle}
        onInput={(event) => setEditingTaskTitle(event.target.value)}
        ref={editInputRef}
         />

        <PurpleButton
        type="submit"
        buttonTitle="Edit title"
        >
            Edit
        </PurpleButton>
    </form>
    )
}

export default EditForm;