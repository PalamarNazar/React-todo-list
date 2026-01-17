import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";
import { useTheme } from "../hooks/useTheme"

export const UiContext = createContext({})

export const UiProvider = ({children}) => {
    const {theme, setTheme} = useTheme()

    const {
        isOpenModalWin,
        setIsOpenModalWin,
        errorMessage, 
        setErrorMessage,
    } = useTodo()

    return (
        <UiContext.Provider 
        value={{
            isOpenModalWin,
            setIsOpenModalWin,
            errorMessage, 
            setErrorMessage,
            theme, 
            setTheme
        }}>
            {children}
        </UiContext.Provider>
    )
}