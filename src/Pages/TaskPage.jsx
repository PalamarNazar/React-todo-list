import { useEffect, useState } from "react";
import taskAPI from "../api/tasksAPI";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger";
import PrevButton from "../components/PrevButton/PrevButton.jsx";


const TaskPage = (props) => {
    const { params } = props

    const taskId = params.id 

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        taskAPI.getById(taskId).then((taskData) => {
            setTask(taskData);
            setHasError(false)
        }).catch(() => {
            setHasError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [taskId])


    if(loading) {
        return (
            <section className="container todo__details">
                <h2>Loading...</h2>
            </section>
        )
    }

    if(hasError) {
        return (
            <>
            <PrevButton />
                <section className="container todo__details">
                    <h2>Error, task not found</h2>
                </section>
            </>
        )
    }

    return (
        <>
        <PrevButton />
        <section className="container todo__details">
            <header className="todo__details-headers">
                <h1>Task details.</h1>
                <ThemeChanger />
            </header>
            <p>Status: {task.isDone ? "complete" : "incomplete"}.</p>
            <p>Tasks text:</p>
            <p className="todo__about">{task.title}</p>
        </section>
        </>
    )
}

export default TaskPage;