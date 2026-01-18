import { useMemo } from "react";
import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext({});
export const TodoUiContext = createContext({})

export const TodoProvider = ({children}) => {
    
    const {
        tasks,
        toggleCheckedTask,
        setTasks,
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
        openList,
        setOpenList,
        editInputRef,
        editTaskApply,
        animation,
        isLoading
    } = useTodo();

    const TodoValue =  useMemo(() => ({
        tasks,
        toggleCheckedTask,
        setTasks,
        newTaskTitle,
        setNewTaskTitle,
        filteredTasks,
        addTasks,
        deleteTask,
        editingTaskTitle, 
        startEditTask,
        setEditingTaskTitle,
        editingTaskId, 
        setEditingTaskId,
        editInputRef,
        editTaskApply,
        isLoading
    }), [
        tasks,
        toggleCheckedTask,
        setTasks,
        newTaskTitle,
        setNewTaskTitle,
        filteredTasks,
        addTasks,
        deleteTask,
        editingTaskTitle, 
        startEditTask,
        setEditingTaskTitle,
        editingTaskId, 
        setEditingTaskId,
        editInputRef,
        editTaskApply,
        isLoading
    ])
    const TodoUiValue =  useMemo(() => ({
        activeOption,
        openList,
        animation,
        searchTaskTitle,
        setSearchTaskTitle,
        setActiveOption,
        setOpenList
    }), [
        activeOption,
        openList,
        animation,
        searchTaskTitle,
        setSearchTaskTitle,
        setActiveOption,
        setOpenList,
    ])

    return (
        <TodoContext.Provider value={TodoValue}>
            <TodoUiContext.Provider value={TodoUiValue}>
                {children}
            </TodoUiContext.Provider>
        </TodoContext.Provider>
    )
}