import { UiProvider } from "./context/UiContext.jsx"
import Router from "./Router.jsx"
import ListPage from "./Pages/ListPage/ListPage.jsx"
import TaskPage from "./Pages/TaskPage/TaskPage.jsx"
import type { JSX } from "react"

const App = () => {
  const routes = {
    '/': ListPage,
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
