import { memo } from 'react';
import { useUiContext } from '../../context/UiContext.js';
import styles from './Overlay.module.scss';

const Overlay = () => {
    const {
        isOpenModalWin,
        setIsOpenModalWin
    } = useUiContext()

    return (
        <div className={`${styles.overlay} ${isOpenModalWin ? styles.isActive : ''}`} onClick={() => setIsOpenModalWin(false)}></div>
    )
}

export default memo(Overlay);