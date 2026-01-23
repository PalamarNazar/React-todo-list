import icon from '../../assets/images/arrow-select.svg';
import { useTodoUiContext } from '../../context/TodoContext.js'
import FilterTaskOption from './FilterTaskOption.js';
import PurpleButton from '../PurpleButton/PurpleButton.js';
import { useUiContext } from '../../context/UiContext.js';
import styles from './FiltersTask.module.scss';
import type { Options } from '../../utils.js';

const options: Options = ['all', 'complete', 'incomplete'];

const FilterTasks = () => {

    const { 
        activeOption,
     } = useTodoUiContext()

    const { 
        openList,
        setOpenList,
     } = useUiContext()

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