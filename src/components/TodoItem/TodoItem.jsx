import { useContext } from 'react';
import ItemControls from '../ItemControls/ItemControls'
import './todo-item.css';
import { TodoContext } from '../../context/TodoContext';
import EditForm from '../editForm/EditForm';
import RouterLink from '../RouterLink/RouterLink';

const TodoItem = (props) => {
    const { id, title, isDone } = props

    const { 
        toggleCheckedTask,  
        editingTaskId,
    } = useContext(TodoContext);

    return (
        <li className="list__item task">
                <input className="task__checkbox" 
                checked={isDone}
                onChange={({target}) => toggleCheckedTask(id, target.checked)}
                type="checkbox" 
                id={id}/>
                <label htmlFor={id} className="task__field visually-hidden">{title}</label>
                    {editingTaskId === id 
                    ? 
                    <EditForm id={id}/>
                    : <RouterLink to={`/tasks/${id}`} className="tasks__item-link router-link" aria-label="Task details">
                        <span className='task__title h3' aria-hidden="true">{title}</span>
                    </RouterLink>}
            
            <ItemControls taskId={id} />
        </li>
    )
}

export default TodoItem;