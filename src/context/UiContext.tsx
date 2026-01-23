import { createContext, type ReactNode, type FC, type Dispatch, type SetStateAction, useContext } from "react";
import {type UseThemeReturn } from "../utils.js"
import { useTheme } from "../hooks/useTheme.js"
import useUi from "../hooks/useUi.js";

interface UiContextTypes {
    isOpenModalWin: boolean,
    setIsOpenModalWin: Dispatch<SetStateAction<boolean>>,
    openList: boolean,
    setOpenList: Dispatch<SetStateAction<boolean>>,
    theme: UseThemeReturn["theme"], 
    setTheme: UseThemeReturn["setTheme"]
}

export const UiContext = createContext<UiContextTypes | null>(null);

type contextProps = {
    children: ReactNode
}

export const UiProvider: FC<contextProps> = ({children}) => {
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

export const useUiContext = (): UiContextTypes => {
    const context = useContext(UiContext);
    if (!context) throw new Error("UiContext must be used")
    return context 
}