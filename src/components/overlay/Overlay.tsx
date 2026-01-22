import { memo, useContext } from 'react';
import { UiContext } from '../../context/UiContext.js';
import styles from './Overlay.module.scss';

const Overlay = () => {
    const {
        isOpenModalWin,
        setIsOpenModalWin
    } = useContext(UiContext);

    return (
        <div className={`${styles.overlay} ${isOpenModalWin ? styles.isActive : ''}`} onClick={() => setIsOpenModalWin(false)}></div>
    )
}

export default memo(Overlay);