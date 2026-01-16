import Todo from "../components/Todo/Todo"
import { TodoProvider } from '../context/TodoContext'
import ModalWin from "../components/modalWin/ModalWin"
import Overlay from "../components/overlay/Overlay"

const ListPage = () => {
    return (
    <TodoProvider>
        <Overlay />
        <ModalWin />
        <header className="header container">
          <h1 className="todo__title">TODO LIST</h1>
        </header>
        <main className="main">
          <Todo />
        </main>
    </TodoProvider>
  )
}

export default ListPage;