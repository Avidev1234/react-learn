import { useRouteError } from "react-router-dom"

export const Error =() =>{
    const error=useRouteError(); // Hooks which shows the error details
    console.log(error);
    
    return (
        <>
        <h1>Error 404</h1>
        </> 
    )
}   