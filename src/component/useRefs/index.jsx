import { useRef } from "react";
import "./useref.css"
export const UseRef=()=>{
    // const userName=document.getElementById('username');
    // const password=document.getElementById('password');



    const userName=useRef(null);
    const password=useRef(null);
    
	console.log(userName,password);
	
	const handleFormSubmit=(e)=>{
		e.preventDefault();
		console.log(userName.current.value,password.current.value);
	}
return (
	<form onSubmit={handleFormSubmit}>
		<input type="text" id="username" ref={userName} placeholder="Enter...."/>

		<input type="password" id="password" ref={password} placeholder="Enter...."/>
		<button>Submit</button>
	</form>
)
}
  