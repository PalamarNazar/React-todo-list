import { useContext } from 'react';
import icon from '../../assets/images/arrow-select.svg';
import { TodoUiContext } from '../../context/TodoContext'
import FilterTaskOption from './FilterTaskOption';
import PurpleButton from '../purpleButton/PurpleButton';
import styles from './FiltersTask.module.scss';
import { UiContext } from '../../context/UiContext';

const options = ['all', 'complete', 'incomplete'];

const FilterTasks = () => {
    const { 
        activeOption,
     } = useContext(TodoUiContext);

    const { 
        openList,
        setOpenList,
     } = useContext(UiContext);

    return (
        <div className={styles.filters}>
            
            <PurpleButton className={`${styles.button} ${openList ? styles.isActive : ''}`}
            onClick={() => setOpenList(!openList)}
            buttonTitle="Tasks filters">

                {activeOption}
                <img className={`${styles.arrow} ${openList ? styles.isActive : ''}`} 
                src={icon}
                alt="" 
                width="7" height="4" />

            </PurpleButton>

            <ul className={`${styles.list} ${openList ? styles.isOpen : ''}`} 
                aria-hidden={!openList} 
                inert={!openList}>
                    
                {options.map((option) => (
                    <FilterTaskOption 
                    key={option}
                    option={option} />
                ))}
            </ul>
        </div>
    )
}

export default FilterTasks;