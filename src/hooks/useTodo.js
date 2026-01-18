import { useEffect, useState, useMemo, useRef, useCallback, useReducer } from "react";
import taskAPI from "../api/tasksAPI";
import useUi from "./useUi";

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': {
            return Array.isArray(action.tasks) ? action.tasks : state
        }
        case 'ADD': {
            return [...state, action.tasks]
        }
        case 'TOGGLE_COMPLETE': {
            const { id, isDone } = action

            return state.map((task) => {
                return task.id === id ? {...task, isDone} : task
            })
        }
        case 'DELETE': {
            return state.filter(task => task.id !== action.id)
        }
        case 'EDIT_TITLE': {
            const { id, title } = action;

            return state.map((task) => {
                return task.id === id ? {...task, title} : task
            })
        }
        default: {
            return state
        }
    }
}

const filterdOptions = {
        all: 'all',
        complete: 'complete',
        incomplete:'incomplete',
}

export const useTodo = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    
    const [activeOption, setActiveOption] = useState('all');
    const [searchTaskTitle, setSearchTaskTitle] = useState('');
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTaskTitle, setEditingTaskTitle] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {addAnimation, removeAnimation, animation} = useUi()
    

    const editInputRef = useRef(null);
    
    const addTasks = useCallback((title) => {
        if (title.trim().length === 0) return;

        
        const newTask = {
            title,
            isDone: false,
        }
        
        taskAPI.add(newTask)
        .then((data) => {
            dispatch({ type: 'ADD', tasks: data,});
            addAnimation('apperingAnim', data.id)
            setTimeout(() => {
                removeAnimation('apperingAnim', data.id)
            }, 400);
        }).catch((data) => {
            removeAnimation('apperingAnim', data.id)
        })
    }, [addAnimation, removeAnimation])

    useEffect(() => {
        taskAPI.getAll().then((data) => {
            dispatch({ type: 'SET_ALL', tasks: data,});
        }).catch(() => {
            setIsLoading(false);
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    const deleteTask = useCallback((taskId) => {
        if (animation.deleatingTasks.includes(taskId)) return;
        addAnimation('deleatingTasks', taskId);

        taskAPI.delete(taskId).then(() => {
            addAnimation('deleteAnim', taskId);

            setTimeout(() => {
                dispatch({ type: 'DELETE', id: taskId,})
                removeAnimation('deleatingTasks', taskId)
                removeAnimation('deleteAnim', taskId)
            }, 400)
        }).catch(() => {
            removeAnimation('deleatingTasks', taskId)
            removeAnimation('deleteAnim', taskId)
        })
    }, [animation.deleatingTasks, addAnimation, removeAnimation])

    const startEditTask = useCallback((id) => {
        tasks.forEach((task) => {
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
            }
        }

        document.addEventListener('dblclick', onDblClick);
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('dblclick', onDblClick);
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [editingTaskId])

    const editTaskApply = useCallback((id, newTitle) => {
        const title = newTitle.trim()

        if (title.length === 0) return;

        taskAPI.editTask(id, title).then(() => {
            dispatch({ type: 'EDIT_TITLE', id, title})
        })
        
        setEditingTaskId(null)
    }, [])
    
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
            dispatch({ type: 'TOGGLE_COMPLETE', id, isDone})
        })}, [])

    return {
        tasks,
        toggleCheckedTask,
        newTaskTitle,
        setNewTaskTitle,
        searchTaskTitle,
        setSearchTaskTitle,
        filteredTasks,
        addTasks,
        deleteTask,
        activeOption,
        setActiveOption,
        editingTaskTitle, 
        startEditTask,
        setEditingTaskTitle,
        editingTaskId, 
        setEditingTaskId,
        editInputRef,
        editTaskApply,
        isLoading,
        animation
    }
}