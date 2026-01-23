import Todo from "../../components/Todo/Todo.jsx"
import { TodoProvider } from '../../context/TodoContext.jsx'
import ModalWin from "../../components/ModalWin/ModalWin.jsx"
import Overlay from "../../components/Overlay/Overlay.jsx"

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