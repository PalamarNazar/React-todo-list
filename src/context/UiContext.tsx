import { createContext } from "react";
import { useTheme } from "../hooks/useTheme.ts"
import useUi from "../hooks/useUi.ts";

export const UiContext = createContext({});

export const UiProvider = ({children}: any) => {
    const {theme, setTheme} = useTheme()

    const {
        isOpenModalWin,
        setIsOpenModalWin,
        openList,
        setOpenList,
    } = useUi()

    return (
        <UiContext.Provider 
        value={{
            isOpenModalWin,
            setIsOpenModalWin,
            openList,
            setOpenList,
            theme, 
            setTheme
        }}>
            {children}
        </UiContext.Provider>
    )
}