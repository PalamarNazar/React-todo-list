import SearchForm from "../SearchForm/SearchForm";
import FilterTasks from "../FilterTask/FilterTask";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import TodoList from "../TodoList/TodoList";
import AddTask from "../addTask/AddTask"
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