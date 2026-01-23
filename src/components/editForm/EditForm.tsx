import type { ChangeEvent, FormEvent } from "react";
import { useTodoContext } from "../../context/TodoContext.js";
import Field from "../Field/Field.js";
import PurpleButton from "../PurpleButton/PurpleButton.js";
import styles from './EditForm.module.scss'
import type { Id, OnFormType, OnInputType } from "../../utils.js";

const EditForm = (props: {id: Id}) => {
    const { id } = props;

    const { 
        editingTaskTitle,
        setEditingTaskTitle,
        editInputRef,
        editTaskApply
    } = useTodoContext()

    const onSubmit = (event: OnFormType) => {
        event.preventDefault();
        if (!editInputRef.current) return;
        editTaskApply(id, editInputRef.current.value)
    }

    return (
    <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="edit-field" className='visually-hidden'>Edit Title</label>

        <Field
        id="edit-field"
        value={editingTaskTitle}
        onChange={(event: OnInputType) => setEditingTaskTitle(event.target.value)}
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