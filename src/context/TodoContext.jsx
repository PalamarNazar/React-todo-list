import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext({});
export const UiContext = createContext({})

export const TodoProvider = ({children}) => {
    
    const {
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
                deleateTask,
                startEditTask,
                editingTaskTitle, 
                setEditingTaskTitle,
                editingTaskId, 
                setEditingTaskId,
                editInputRef,
                editTaskApply,
        }}>
            <UiContext.Provider 
            value={{
                isOpenModalWin,
                setIsOpenModalWin,
                searchTaskTitle,
                setSearchTaskTitle,
                activeOption,
                setActiveOption,
                openList,
                setOpenList,
                errorMessage, 
                setErrorMessage,
            }}>
                {children}
            </UiContext.Provider>
        </TodoContext.Provider>
    )
}