import { useTodoUiContext } from "../../context/TodoContext.js";
import styles from './FiltersTask.module.scss';
import type { ActiveOptions } from "../../utils.js";

const FilterTaskOption = (props: {option: ActiveOptions}) => {
    const { option } = props
    
    const { activeOption, setActiveOption } = useTodoUiContext()
    
    return (
        <li 
        className={`${styles.option} ${activeOption === option ? styles.isActive : ''}`}>
            <button className={`${styles.optionButton} button-reset`}
            onClick={() => setActiveOption(option)} 
            type='button'>
                {option}
            </button>
        </li>
    )
}

export default FilterTaskOption;