import { useState, useCallback } from "react"
import { type animation, type animationKey } from "../utils.js";

type animationFunction = (key: animationKey, value: string) => void;

const useUi = () => {
    const [isOpenModalWin, setIsOpenModalWin] = useState<boolean>(false); 
    const [openList, setOpenList] = useState<boolean>(false);
    const [animation, setAnimation] = useState<animation>({
                deleatingTasks: [],
                deleteAnim: [],
                apperingAnim: [],
    })

    const addAnimation: animationFunction = useCallback((key, taskId) => {
        setAnimation(prevAnim => (
            {...prevAnim, [key]: prevAnim[key].includes(taskId)
                ? prevAnim[key]
                : [...prevAnim[key], taskId]}
        ))
    }, [])

    const removeAnimation: animationFunction = useCallback((key, taskId) => {
        if (!key && !taskId) return;
        
            setAnimation(prevAnim => (
                {...prevAnim, [key]: prevAnim[key].filter(id => id !== taskId)}
            ))
    }, [])

    return {
        animation,
        addAnimation,
        removeAnimation,
        isOpenModalWin,
        setIsOpenModalWin,
        openList,
        setOpenList,
    }
}

export default useUi;