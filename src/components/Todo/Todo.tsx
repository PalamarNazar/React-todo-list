import SearchForm from "../SearchForm/SearchForm.js";
import FilterTasks from "../FilterTask/FilterTask.js";
import ThemeChanger from "../ThemeChanger/ThemeChanger.js";
import TodoList from "../TodoList/TodoList.js";
import AddTask from "../AddTask/AddTask.js"
import styles from './Todo.module.scss'

const Todo = () => {

    return (
        <> 
            <section className={`${styles.todo} container`}>
                <header className={styles.controls}>
                    <SearchForm className={styles.todoSearchForm}/>
                    <FilterTasks />
                    <ThemeChanger />
                </header>
                <TodoList />
                <AddTask />
            </section>
        </>
    )
}

export default Todo;