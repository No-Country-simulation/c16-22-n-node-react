import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";




export const router = createBrowserRouter ([
     //  ubicar rutas aqui ejemplo:

     {
          path: "/",
          element: <Home />,
      },

    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/blog",
    //     element: <Blog />,
    // },
])