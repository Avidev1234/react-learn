// import { Home } from "../pages/Home"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Applayout = () =>{
    return (
        <>
         <Header /> 
         {/* <Home/> */}
         {/* To show the children component in react router we need outlet component is used in parent root elements to render their child root elements */}
         <Outlet/> 
         <Footer />
        </>
    )
}