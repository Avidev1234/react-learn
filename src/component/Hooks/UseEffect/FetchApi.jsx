import { useEffect, useState } from "react"

export const FetchApi=()=>{

	const [count,setCount]=useState(null);

	const Api="https://pokeapi.co/api/v2/pokemon/ditto";

	const fetcpi=()=>{
		fetch(Api)
		.then((res) => res.json())//all data is stored in `res` and convert to json
		.then((data) => {
			setCount(data);

		})//storing data coming through res in parameter `data` and displaying data .
		.catch((error)=>console.log(error))
	}
	useEffect(()=>{
		fetcpi();
		// fetch("https://jsonplaceholder.typicode.com/posts");//return promise
	},[]);//this `[]` means useEffect will run only once when component mounts


		console.log(count);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// it will run multiple times
	// fetch("https://jsonplaceholder.typicode.com/posts")
	// .then((res) => res.json())//all data is stored in `res` and convert to json
	// .then((data) => {
	// setCount(data);
	// })//storing data coming through res in parameter `data` and displaying data .
	// .catch((error)=>console.log(error))
	// // fetch("https://jsonplaceholder.typicode.com/posts");//return promise
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if(count){
		return(
			<div className="container">
			<h1>{count.name}</h1>
			</div>
		)
	}
}
