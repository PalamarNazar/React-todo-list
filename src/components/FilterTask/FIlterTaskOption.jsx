import { useContext } from "react";
import { UiContext } from "../../context/TodoContext";

const FilterTaskOption = (props) => {
    const { option } = props
    
    const { setActiveOption } = useContext(UiContext);
    
    return (
        <li 
        className="filters__option" 
        key={option}>
            <button className="filters__option-button button-reset" 
            onClick={() => setActiveOption(option)} 
            type='button'>
                {option}
            </button>
        </li>
    )
}

export default FilterTaskOption;