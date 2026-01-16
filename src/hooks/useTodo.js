import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import taskAPI from "../api/tasksAPI";

const filterdOptions = {
        all: 'all',
        complete: 'complete',
        incomplete:'incomplete',
}

export const useTodo = () => {
    const [tasks, setTasks] = useState([]);
    
    const [isOpenModalWin, setIsOpenModalWin] = useState(false); 
    const [openList, setOpenList] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchTaskTitle, setSearchTaskTitle] = useState('');
    const [activeOption, setActiveOption] = useState('all');
    const [editingTaskTitle, setEditingTaskTitle] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const editInputRef = useRef(null);
    
    const addTasks = useCallback(() => {
        if (newTaskTitle.trim().length === 0) return;

        const newTask = {
                title: newTaskTitle,
                isDone: false,
        }
        
        taskAPI.add(newTask)
        .then((data) => {
            setTasks(tasks => [...tasks, data]);
            setIsOpenModalWin(false);
            setNewTaskTitle('');
        })
    
    }, [newTaskTitle])

    useEffect(() => {
        taskAPI.getAll().then((data) => {
            setTasks(data);
        })
    }, [])

    const deleateTask = useCallback((taskId) => {
        taskAPI.delete(taskId).then(() => {
            setTasks(prevTasks => prevTasks.filter((task) => task.id !== taskId))
        })
    }, [])

    const startEditTask = useCallback((id) => {
        tasks.find((task) => {
            if (task.id === id) {
                setEditingTaskTitle(task.title)
                setEditingTaskId(task.id)
            }
        })
    }, [tasks])

    useEffect(() => {
        if(!editingTaskId) return; 
        editInputRef.current.focus()

        const onDblClick = (event) => {
            const clickEditField = event.target === editInputRef.current

            if (clickEditField) return; 
            setEditingTaskId(null)
        }

        const onKeyDown = (event) => {
            const { code } = event

            if (code === 'Escape') {
                setEditingTaskId(null)
            } else if (code === 'Tab') {
                setEditingTaskId(null)
            } else if (code === 'Enter') {
                // 
            }
        }

        document.addEventListener('dblclick', onDblClick);
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('dblclick', onDblClick);
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [editingTaskId])

    const editTaskApply = useCallback(
        (id) => {
        const title = editingTaskTitle.trim()

        if (title.length === 0) return;

        taskAPI.editTask(id, title).then(() => {
            setTasks(tasks => tasks.map((task) => {
                if (task.id === id) {
                    return {...task, title}
                }

                return task
            }))
        })
        
        setEditingTaskId(null)
    }, [editingTaskTitle])
    
    const filteredTasks = useMemo(() => {
    let result = tasks;

    if (activeOption === filterdOptions.complete) {
            result = tasks.filter(({isDone}) => isDone)
    } 
    else if (activeOption === filterdOptions.incomplete) {
            result = tasks.filter(({isDone}) => !isDone)
    }

    const clearTitle = searchTaskTitle.trim().toLowerCase();
    if (clearTitle.length > 0) {
        result = result.filter(({title}) => title.toLowerCase().includes(clearTitle))
    } 

    return result;

    }, [tasks, searchTaskTitle, activeOption])

    const toggleCheckedTask = useCallback(
        (id, isDone) => {
        taskAPI.toggleComplete(id, isDone).then(() => {
            setTasks(tasks => tasks.map((task) => {
                    if(task.id === id) {
                        return {...task, isDone}
                    }
    
                    return task
                }))
        })}, [])

    return {
        tasks,
        isOpenModalWin,
        setIsOpenModalWin,
        toggleCheckedTask,
        setTasks,
        newTaskTitle,
        setNewTaskTitle,
        searchTaskTitle,
        setSearchTaskTitle,
        filteredTasks,
        addTasks,
        deleateTask,
        activeOption,
        setActiveOption,
        editingTaskTitle, 
        startEditTask,
        setEditingTaskTitle,
        editingTaskId, 
        setEditingTaskId,
        openList,
        setOpenList,
        editInputRef,
        editTaskApply,
        errorMessage, 
        setErrorMessage,
    }
}