import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import AboutUs from "../Component/AboutUs/AboutUs";
import Prices from "../Component/Prices/Prices";
import ContactUs from "../Component/ContactUS/ContactUs";

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
             path: "/contact",
        element: <ContactUs />,
          },
          {
             path: "/price",
        element: <Prices />,
          }
    ]
  },
   
]);