import { memo, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../context/TodoContext";
import detectiveDarkImage from '../../assets/images/Detective-dark.svg'
import './list.css';

const TodoList = () => {

    const { tasks, filteredTasks } = useContext(TodoContext);
    
    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if(!hasTasks) {
        return (
            <div className="empty-message h3">
                <p>{`You don't have any tasks yet.`}</p>
            </div>
        )
    }  
    
    if (hasTasks && isEmptyFilteredTasks) {
        return (
            <>
            <div className="empty-message h3">
            <img className="empty-message__image" 
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
        <ul className="todo__list list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem key={task.id} {...task} />
            ))}
        </ul>
    )
}

export default memo(TodoList);