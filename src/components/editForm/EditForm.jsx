import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import Field from "../field/Field";
import PurpleButton from "../purpleButton/PurpleButton";
import styles from './EditForm.module.scss'

const EditForm = (props) => {

    const { id } = props;

    const { 
            editingTaskTitle,
            setEditingTaskTitle,
            editInputRef,
            editTaskApply
        } = useContext(TodoContext);

    const onInput = (event) => {
        event.preventDefault();
        editTaskApply(id)
    }

    return (
    <form className={styles.form} onSubmit={(event) => onInput(event)}>
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