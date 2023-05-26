import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import LogIn from "../SEC/LogIn";
import Register from "../SEC/Register";
import Booking from "../Pages/Booking/Booking";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/booking",
        element: (
          <Private>
            <Booking />
          </Private>
        ),
      },
    ],
  },
]);


export default router;