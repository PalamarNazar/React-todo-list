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
            id: crypto.randomUUID(),
            title,
            isDone: false,
        }
        
        const addedTask = taskAPI.add(newTask);

        if (addedTask) {
            dispatch({ type: 'ADD', tasks: addedTask,});
            addAnimation('apperingAnim', addedTask.id)
            setTimeout(() => {
                removeAnimation('apperingAnim', addedTask.id)
            }, 400);
        }

        removeAnimation('apperingAnim', addedTask.id)

    }, [addAnimation, removeAnimation])

    useEffect(() => {
        const data = taskAPI.getAll()

        if (data) {
            setIsLoading(false);
            dispatch({ type: 'SET_ALL', tasks: data,});
        }
    }, [])

    const deleteTask = useCallback((taskId) => {
        if (animation.deleatingTasks.includes(taskId)) return;
        addAnimation('deleatingTasks', taskId);

        const deleatingTaskId = taskAPI.delete(taskId)

            addAnimation('deleteAnim', taskId);

            if (deleatingTaskId) {
                setTimeout(() => {
                    dispatch({ type: 'DELETE', id: taskId,})
                    removeAnimation('deleatingTasks', taskId)
                    removeAnimation('deleteAnim', taskId)
                }, 400)
            } else {
                removeAnimation('deleatingTasks', taskId)
                removeAnimation('deleteAnim', taskId)
            }
    }, [animation.deleatingTasks, addAnimation, removeAnimation])

    const startEditTask = useCallback((id) => {
        const editingTask = tasks.find((task) => task.id === id)

        if (!editingTask) return;
        setEditingTaskTitle(editingTask.title)
        setEditingTaskId(editingTask.id)
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

        const editingTaskId = taskAPI.editTask(id, title)

        if (!editingTaskId) return;

        dispatch({ type: 'EDIT_TITLE', id, title})
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

    const toggleCheckedTask = useCallback((id, isDone) => {
        const isToggleTaskid = taskAPI.toggleComplete(id, isDone)

        if (!isToggleTaskid) return;
        dispatch({ type: 'TOGGLE_COMPLETE', id, isDone})
    }, [])

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
        animation,
    }
}