import { useEffect, useState } from "react";
import { type Task, type Id } from "../../utils.js";
import taskAPI from "../../api/tasksAPI.js";
import PrevButton from "../../components/PrevButton/PrevButton.js";
import styles from './TaskPage.module.scss'

type TaskProps = {params: {id: Id}}

const TaskPage = (props: TaskProps) => {
    const { params } = props

    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const errorMessage = () => ( 
            <>
            <PrevButton />
                <div className={`${styles.details} container`}>
                    <h1>Error, task not found</h1>
                </div>
            </>)

    const taskId = params.id 

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

    if(hasError || !task) {
        return errorMessage()
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