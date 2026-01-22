import Todo from "../../components/Todo/Todo.tsx"
import { TodoProvider } from '../../context/TodoContext.tsx'
import ModalWin from "../../components/ModalWin/ModalWin.tsx"
import Overlay from "../../components/Overlay/Overlay.tsx"

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