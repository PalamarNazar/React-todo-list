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
    } = useTodo();

    return (
        <TodoContext.Provider
        value={{
                tasks,
                toggleCheckedTask,
                setTasks,
                newTaskTitle,
                setNewTaskTitle,
                filteredTasks,
                addTasks,
                deleteTask,
                startEditTask,
                editingTaskTitle, 
                setEditingTaskTitle,
                editingTaskId, 
                setEditingTaskId,
                editInputRef,
                editTaskApply,
        }}>
            <TodoUiContext.Provider 
            value={{
                searchTaskTitle,
                setSearchTaskTitle,
                activeOption,
                setActiveOption,
                openList,
                setOpenList,
            }}>
                {children}
            </TodoUiContext.Provider>
        </TodoContext.Provider>
    )
}