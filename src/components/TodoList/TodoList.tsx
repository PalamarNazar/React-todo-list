import { memo } from "react";
import TodoItem from "../TodoItem/TodoItem.js";
import { useTodoContext } from "../../context/TodoContext.js";
import detectiveDarkImage from '../../assets/images/Detective-dark.svg'
import styles from './TodoList.module.scss';

const TodoList = () => {

    const { tasks, filteredTasks, isLoading } = useTodoContext()
    
    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (isLoading) {
        return (
            <div className={`${styles.emptyMessage} h3`}>
                <p>Loading your tasks...</p>
            </div>
        )
    }

    if(!hasTasks) {
        return (
            <div className={`${styles.emptyMessage} h3`}>
                <p>You don't have any tasks yet.</p>
            </div>
        )
    }  

    
    if (hasTasks && isEmptyFilteredTasks) {
        return (
            <>
            <div className={`${styles.emptyMessage} h3`}>
            <img 
            src={detectiveDarkImage} 
            alt="Tasks not found" 
            width="221" height="174"
            />
                <p>Tasks not found.</p>
            </div>
            </>
        )
    }

    return (
        <ul className={`${styles.list}`}>
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem key={task.id} {...task} />
            ))}
        </ul>
    )
}

export default memo(TodoList);