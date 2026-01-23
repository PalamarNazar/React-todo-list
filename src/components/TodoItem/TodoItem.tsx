import { memo } from 'react';
import ItemControls from '../ItemControls/ItemControls.jsx'
import { useTodoContext, useTodoUiContext } from '../../context/TodoContext.jsx';
import EditForm from '../EditForm/EditForm.jsx';
import RouterLink from '../RouterLink/RouterLink.jsx';
import type { Task } from "../../utils.js";
import styles from './TodoItem.module.scss';

const TodoItem = (props: Task) => {
    const { id, title, isDone } = props

    const { 
        toggleCheckedTask,  
        editingTaskId,
    } = useTodoContext()

    const { 
        animation
    } = useTodoUiContext()

    return (
        <li className={`
        ${styles.task} 
        ${animation.deleteAnim.includes(id) ? styles.animationDelete : ''}
        ${animation.apperingAnim.includes(id) ? styles.animationAppear : ''}
        ${animation.deleatingTasks.includes(id) ? styles.isDisabled : ''}
        `}>
                <input className={styles.checkbox} 
                checked={isDone}
                onChange={({target}) => toggleCheckedTask(id, target.checked)}
                type="checkbox" 
                id={id}/>
                <label htmlFor={id} className="visually-hidden">{title}</label>
                    {editingTaskId === id 
                    ? 
                    <EditForm id={id}/>
                    : <RouterLink to={`#/tasks/${id}`} className={styles.link} aria-label="Task details">
                        <span className={`${styles.title} h3`} aria-hidden="true">{title}</span>
                    </RouterLink>}
            
            <ItemControls className={styles.controls ?? ""} taskId={id} />
        </li>
    )
}

export default memo(TodoItem);