import { UiProvider } from "./context/UiContext"
import Router from "./Router"
import ListPage from "./Pages/ListPage/ListPage"
import TaskPage from "./Pages/TaskPage/TaskPage"

const App = () => {
  const routes = {
    '/React-todo-list/': ListPage,
    '/tasks/:id': TaskPage,
    '*': () => <h1>Error, Page not Found...</h1>,
  }
  
  return (
    <UiProvider>
      <Router routes={routes} />
    </UiProvider>
  )
}

export default App
