import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home";
import Login from "../components/Auth/Login";
import Game from "../Pages/User/Game";



const router = createBrowserRouter([
   
    {
      path : "/",
      element : <Home />,
    },
    {
      path : "/games",
      element : <Game />,
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "*",
      element : <h1>404 Not Found</h1>
    }
]);


export default router;