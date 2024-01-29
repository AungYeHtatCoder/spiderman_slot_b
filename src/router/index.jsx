import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home";
import Login from "../components/Auth/Login";
import Game from "../Pages/User/Game";
import Wallet from "../Pages/User/Wallet";
import Layout from "../layouts/Layout";
import Promotion from "../Pages/User/Promotion";
import ChangePassword from "../Pages/User/ChangePassword";
import Profile from "../Pages/User/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games",
        element: <Game />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
