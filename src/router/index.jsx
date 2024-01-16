import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home";
import Login from "../components/Auth/Login";
import Game from "../Pages/User/Game";
import Wallet from "../Pages/User/Wallet";
import Layout from "../layouts/Layout";



const router = createBrowserRouter([
   
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Home />,
        },
        {
          path : "/games",
          element : <Game />,
        },
        {
          path : "/wallet",
          element : <Wallet />
        }
      ]
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