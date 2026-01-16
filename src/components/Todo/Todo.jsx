import './todo.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterTasks from "../FilterTask/FilterTask";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import TodoList from "../TodoList/TodoList";
import AddTask from "../addTask/AddTask"

const Todo = () => {

    return (
        <> 
            <div className="todo container">
                <div className="todo__controls">
                    <SearchForm />
                    <FilterTasks />
                    <ThemeChanger />
                </div>
                <TodoList />
                <AddTask />
            </div>
        </>
    )
}

export default Todo;