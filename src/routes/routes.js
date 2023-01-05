import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Protected from "../Auth/Protected";
import About from "../pages/Home/About";
import Cart from "../pages/Home/Cart";
import Product from "../pages/Home/Product";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Protected Component={Product} />,
      },

      {
        path: "/cart",
        element: <Protected Component={Cart} />,
      },
      {
        path: "/product",
        element: <Protected Component={Product} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/lohin",
        element: <Login />,
      },
    ],
  },
]);

export default router;
