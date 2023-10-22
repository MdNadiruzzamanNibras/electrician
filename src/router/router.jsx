import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import AboutUs from "../Component/AboutUs/AboutUs";
import Prices from "../Component/Prices/Prices";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element:<Home/>
          },
          {
             path: "/about",
        element: <AboutUs />,
          },
          {
             path: "/price",
        element: <Prices />,
          }
    ]
  },
   
]);