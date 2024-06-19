import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./routes/Login"
import Game from "./routes/Game"
import Admin from "./routes/Admin"

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Game /> },
    { path: "/login", element: <Login /> },
    { path: "/admin", element: <Admin /> }
  ])




  return (
    <RouterProvider router={router} />
  )
}

export default App