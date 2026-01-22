import { useContext } from "react";
import { TodoUiContext } from "../../context/TodoContext.js";
import styles from './FiltersTask.module.scss';

const FilterTaskOption = (props) => {
    const { option } = props
    
    const { activeOption, setActiveOption } = useContext(TodoUiContext);
    
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