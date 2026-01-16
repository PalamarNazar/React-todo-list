import { memo, useContext } from 'react';
import './overlay.css';
import { UiContext } from '../../context/TodoContext';

const Overlay = () => {
    const {
        isOpenModalWin,
        setIsOpenModalWin
    } = useContext(UiContext);

    return (
        <div className={`overlay ${isOpenModalWin ? 'is-active' : ''}`} onClick={() => setIsOpenModalWin(false)}></div>
    )
}

export default memo(Overlay);