import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";

export const Router =()=>{

    const rout=createBrowserRouter([
        {
        path:"/",
        element:<Home />
        },
        {
        path:"/about",
        element:<About />
        },
        {
        path:"/contact",
        element:<Contact />
        },
        {
        path:"/movie",
        element:<Movie />
        },

]);
    return (
        <>
        <RouterProvider router={rout}/>
        </>
    )
}