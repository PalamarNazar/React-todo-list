import Router from "./Router"
import ListPage from "./Pages/ListPage"
import TaskPage from "./Pages/TaskPage"

const App = () => {
  const routes = {
    '/': ListPage,
    '/tasks/:id': TaskPage,
    '*': () => <h1>Error, Page not Found...</h1>,
  }
  
  return (
    <Router routes={routes} />
  )
}

export default App
