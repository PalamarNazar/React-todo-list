import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import Field from "../field/Field";
import PurpleButton from "../purpleButton/PurpleButton";
import './edit-form.css'

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
    <form className="task__form-edit edit-form" onSubmit={(event) => onInput(event)}>
        <label htmlFor="edit-field" className='visually-hidden'>Edit Title</label>

        <Field className="edit-form__input"
        id="edit-field"
        value={editingTaskTitle}
        onInput={(event) => setEditingTaskTitle(event.target.value)}
        ref={editInputRef}
         />

        <PurpleButton className="edit-form__button"
        type="submit"
        buttonTitle="Edit title"
        >
            Edit
        </PurpleButton>
    </form>
    )
}

export default EditForm;