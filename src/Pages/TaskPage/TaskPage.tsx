import { useEffect, useState } from "react";
import taskAPI from "../../api/tasksAPI.js";
import PrevButton from "../../components/PrevButton/PrevButton.js";
import styles from './TaskPage.module.scss'


const TaskPage = (props) => {
    const { params } = props

    const taskId = params.id 

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const taskData = taskAPI.getById(taskId)
        
        if (!taskData) {
            setHasError(true)
        } else {
            setTask(taskData);
        }

        setLoading(false)
    }, [taskId])

    if(loading) {
        return (
            <div className={`${styles.details} container`}>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(hasError) {
        return (
            <>
            <PrevButton />
                <div className={`${styles.details} container`}>
                    <h1>Error, task not found</h1>
                </div>
            </>
        )
    }

    return (
        <>
        <PrevButton />
        <div className={`${styles.details} container`}>
            <h1>Task details.</h1>
            <p>Status: {task.isDone ? "complete" : "incomplete"}.</p>
            <p>Tasks text:</p>
            <p className={styles.aboutTask}>{task.title}</p>
        </div>
        </>
    )
}

export default TaskPage;