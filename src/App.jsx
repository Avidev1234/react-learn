// import Netflixseries, { Footer, Header } from "./component/Netflixseries";
// import Netflixseries from "./component/Netflixseries";
// import Profile from "./component/Profile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Applayout } from "./projects/react_router_project/layout/Applayout";
import { About } from "./projects/react_router_project/pages/About";
import { Home } from "./projects/react_router_project/pages/Home";
import { Contact } from "./projects/react_router_project/pages/Contact";
import { Error } from "./projects/react_router_project/pages/Error";

// import { Router } from "./projects/react_router_project/Router";

// import { Home } from "./component/ContextApi/Home";
// import { BioProvider } from "./component/ContextApi";
// import { About } from "./component/About";
// import { Servces } from "./component/ContextApi/Services";
// import { DarkLight,ThemeProvider } from "./component/ContextApi/DarkLight";
// import { ReducerCom } from "./component/Hooks/Usereducer";

// import { PropDrilling } from "./component/PropDrilling";

// import { UseId } from "./component/useID/UseId";

// import { ForwordRef } from "./component/useRefs/ForwordRef";

// import { UseRef } from "./component/useRefs";

// import { Pokemon } from "./projects/Pokemon/Pokemon";

// import { FetchApiobj } from "./component/Hooks/UseEffect/FetchApiobj";

// import { FetchApi } from "./component/Hooks/UseEffect/FetchApi";

// import { CleanUp } from "./component/Hooks/UseEffect/CleanUp";

// import { UseEffectChallange } from "./component/Hooks/UseEffect/UseEffectChallange";

// import { Index } from "./component/Hooks/UseEffect/Index";

// import ContactForm from "./component/ContactForm";

// import LoginForm from "./component/LoginForm";

// import { Newregistration } from "./component/Newsregistration";

// import { Registration } from "./component/Resgistration";

// import { Controlled } from "./component/controlled/Controlled";

// import { UseStatechallange } from "./projects/Increment/useStatechallange";

// import Index from "./component/Usestate";

// import { ShortCircuit } from "./component/ShortCircuit";

// import { Keys } from "./keys";
// import { Todo } from "./projects/Todo/Todo";


// import { Toggleswitch } from "./projects/Toggleswitch/Toggleswitch";

// import { LiftstateUp } from "./component/Liftstateup";

// import { DerivedState } from "./component/Hooks/DerivedState";

// import { Table } from "./component/Table";

// import { State } from "./component/Hooks/State";
// import { State2 } from "./component/Hooks/State2";

// import { EventPropagation } from "./component/EventPropagation";

// import { EventProps } from "./component/EventProps";
// import {EventHandling} from "./component/EventHandling.jsx";
export const App = () => {
	const Router=createBrowserRouter([
			{ 
				path:"/",
				element:<Applayout />,   
				errorElement:<Error />,
				children:[
					{
						path:"/",
						element: <Home/>
					},		
					{
						path:"/about",
						element:<About/>
					},
					{
						path:"/contact",
						element:<Contact/>
					}
				]
			}
	])
	// return <h1>Hello React V19</h1>
	return (
		<>
		<RouterProvider router={Router}/>
			{/* <Header /> */} 
			{/* <Netflixseries /> */}
			{/* <Profile /> */}
			{/* <Footer /> */} 
			{/* <EventHandling/> */}
			{/* <EventProps/> */}
			{/* <EventPropagation/> */}
			{/* <State/> */}
			{/* <DerivedState/> */}
			{/* <Sibling /> */}
			{/* <LiftstateUp /> */}
			{/* <Toggleswitch/> */}
			{/* <Keys/> */}
			{/* <ShortCircuit /> */}
			{/* <Index/> */}
			{/* <Todo/> */}
			{/* <UseStatechallange /> */}
			{/* <Controlled/> */}
			{/* <Newregistration/> */}
			{/* <State2 /> */}
			{/* <Registration/> */}
			{/* <LoginForm/> */}
			{/* <Index /> */}
			{/* <FetchApi/> */}

{/* <UseRef/> */}
{/* <ForwordRef/> */}
	{/* <UseId /> */}

	{/* <PropDrilling/> */}
	{/* <BioProvider>
		<Home />
		<About />
		<Servces />
	</BioProvider> */}

	{/* <ThemeProvider>
		<DarkLight />
	</ThemeProvider> */}


	{/* <Pokemon/> */}
	{/* <FetchApiobj/> */}
	{/* <UseEffectChallange/> */} 

	{/* <CleanUp/> */}
	{/* <ContactForm/> */}
	{/* <Table /> */}
	{/* <ReducerCom /> */}

	{/* <Router/> */}


	
	</>
	);
};


// export const Sibling = () => {

// console.log("SiblingComponent");

// return (
// <div className="main-div">
// <h2>SiblingComponent </h2>
// </div>
// )
// }
