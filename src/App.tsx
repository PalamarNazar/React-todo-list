import { UiProvider } from "./context/UiContext.tsx"
import Router from "./Router.tsx"
import ListPage from "./Pages/ListPage/ListPage.tsx"
import TaskPage from "./Pages/TaskPage/TaskPage.tsx"

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
