import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Auth/Login";
import About from "../pages/Home/About";
import Cart from "../pages/Home/Cart";
import Home from "../pages/Home/Home";
import Product from "../pages/Home/Product";
import Main from "../pages/Main/Main";
import NabBar from "../pages/navigation/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
