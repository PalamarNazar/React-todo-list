import { useContext } from 'react';
import './item-controls.css';
import { TodoContext } from '../../context/TodoContext';

const ItemControls = (props) => {
    const { taskId } = props

    const { deleateTask, startEditTask } = useContext(TodoContext);

    return (
        <div className="task__controls item-controls">
            <button className="item-controls__button item-controls__edit button-reset" 
                type="button"
                aria-label="Edit"
                title="Edit"
                onClick={() => startEditTask(taskId)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.17272 3.49106L0.5 10.1637V13.5H3.83636L10.5091 6.82736M7.17272 3.49106L9.5654 1.09837L9.5669 1.09695C9.8962 0.767585 10.0612 0.602613 10.2514 0.540824C10.4189 0.486392 10.5993 0.486392 10.7669 0.540824C10.9569 0.602571 11.1217 0.767352 11.4506 1.09625L12.9018 2.54738C13.2321 2.87769 13.3973 3.04292 13.4592 3.23337C13.5136 3.40088 13.5136 3.58133 13.4592 3.74885C13.3974 3.93916 13.2324 4.10414 12.9025 4.43398L12.9018 4.43468L10.5091 6.82736M7.17272 3.49106L10.5091 6.82736" stroke="#CDCDCD" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
            </button>
            <button className="item-controls__button item-controls__deleate button-reset" 
                type="button"
                aria-label="Deleate"
                title="Deleate"
                onClick={() => deleateTask(taskId)}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD" />
                        <path d="M14.625 3.75H3.375" stroke="#CDCDCD" strokeLinecap="round" />
                        <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD" />
                        <path d="M10.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round" />
                        <path d="M7.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round" />
                    </svg>
            </button>
        </div>
    )
}

export default ItemControls;