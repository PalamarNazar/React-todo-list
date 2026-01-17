import { memo, useContext } from 'react';
import ItemControls from '../ItemControls/ItemControls'
import { TodoContext } from '../../context/TodoContext';
import EditForm from '../editForm/EditForm';
import RouterLink from '../RouterLink/RouterLink';
import styles from './TodoItem.module.scss';

const TodoItem = (props) => {
    const { id, title, isDone } = props

    const { 
        toggleCheckedTask,  
        editingTaskId,
    } = useContext(TodoContext);

    return (
        <li className={styles.task}>
                <input className={styles.checkbox} 
                checked={isDone}
                onChange={({target}) => toggleCheckedTask(id, target.checked)}
                type="checkbox" 
                id={id}/>
                <label htmlFor={id} className="visually-hidden">{title}</label>
                    {editingTaskId === id 
                    ? 
                    <EditForm id={id}/>
                    : <RouterLink to={`/tasks/${id}`} className={styles.link} aria-label="Task details">
                        <span className={`${styles.title} h3`} aria-hidden="true">{title}</span>
                    </RouterLink>}
            
            <ItemControls className={styles.controls} taskId={id} />
        </li>
    )
}

export default memo(TodoItem);