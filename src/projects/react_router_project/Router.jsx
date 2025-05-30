import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";

export const Router =()=>{

    // new
// const rout=createBrowserRouter([
// { 
// path:"/",
// element:<Home />
// },
// {
// path:"/about",
// element:<About />
// },
// {
// path:"/contact",
// element:<Contact />
// },
// {
// path:"/movie",
// element:<Movie />
// },

// ]);

// or
// old
	const rout=createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={Contact}/>
				<Route path="/movie" element={Movie}/>
            </Route>
		)
	);
	return (
		<>
		<RouterProvider router={rout}/>
		</>
	)
}
