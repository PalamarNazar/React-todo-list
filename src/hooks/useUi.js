import { useState, useCallback } from "react"

const useUi = () => {
    const [isOpenModalWin, setIsOpenModalWin] = useState(false); 
    const [openList, setOpenList] = useState(false);
    const [animation, setAnimation] = useState({
                deleatingTasks: [],
                deleteAnim: [],
                apperingAnim: [],
    })

    const addAnimation = useCallback((key, taskId) => {
        setAnimation(prevAnim => (
            {...prevAnim, [key]: prevAnim[key].includes(taskId) 
                ? prevAnim[key]
                : [...prevAnim[key], taskId]}
        ))
    }, [])

    const removeAnimation = useCallback((key, taskId) => {
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