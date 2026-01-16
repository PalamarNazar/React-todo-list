import { useContext } from 'react';
import icon from '../../assets/images/arrow-select.svg';
import './filters-task.css';
import { UiContext } from '../../context/TodoContext'
import FilterTaskOption from './FIlterTaskOption';
import PurpleButton from '../purpleButton/PurpleButton';

const options = ['all', 'complete', 'incomplete'];
const isOpen = 'is-open';
const isActive = 'is-active';

const FilterTasks = () => {
    const { 
        activeOption,
        openList,
        setOpenList,
     } = useContext(UiContext);

    return (
        <div className='todo__filters filters'>
            
            <PurpleButton className={`filters__button ${openList ? isActive : ''}`}
            onClick={() => setOpenList(!openList)}
            buttonTitle="Tasks filters">

                {activeOption}
                <img className={`filters__arrow ${openList ? isActive : ''}`} 
                src={icon}
                alt="" 
                width="7" height="4" />

            </PurpleButton>

            <ul className={`filters__list ${openList ? isOpen : ''}`} 
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