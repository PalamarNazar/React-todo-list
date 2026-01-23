import { useMemo, createContext, type ReactNode, useContext } from "react";
import { type TodoContextTypes,  type TodoUiContextTypes } from "../utils.js"
import { useTodo } from "../hooks/useTodo.js";

export const TodoContext = createContext<TodoContextTypes | null>(null);
export const TodoUiContext = createContext<TodoUiContextTypes | null>(null)

type contextProps = {
    children: ReactNode,
}

export const TodoProvider = ({children}: contextProps) => {
    
    const {
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
        animation,
        isLoading,
    } = useTodo();

    const TodoValue: TodoContextTypes =  useMemo(() => ({
        tasks,
        toggleCheckedTask,
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
        isLoading,
    }), [
        tasks,
        toggleCheckedTask,
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
        isLoading,
    ])
    const TodoUiValue: TodoUiContextTypes =  useMemo(() => ({
        activeOption,
        animation,
        searchTaskTitle,
        setSearchTaskTitle,
        setActiveOption,
    }), [
        activeOption,
        animation,
        searchTaskTitle,
        setSearchTaskTitle,
        setActiveOption,
    ])

    return (
        <TodoContext.Provider value={TodoValue}>
            <TodoUiContext.Provider value={TodoUiValue}>
                {children}
            </TodoUiContext.Provider>
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error('useTodoContext must be used')
    return context
}

export const useTodoUiContext = () => {
    const context = useContext(TodoUiContext);
    if (!context) throw new Error('useTodoContext must be used')
    return context
}