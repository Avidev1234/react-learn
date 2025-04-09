import { useEffect, useState } from "react";
import "./FetchApi.css";
export const FetchApi=()=>{
// fetching api under Array
	const [count,setCount]=useState([]);

// when we get array of an object we use `[]` on `useState` Hooks otherwise when we use only object we use `null` on `useState` Hooks.

	const Api="https://pokeapi.co/api/v2/pokemon";

	const fetcpi=()=>{
		fetch(Api)
		.then((res) => res.json())//all data is stored as a `response` and convert to json
		.then((data) => {
			setCount(data.results);

		})//storing data coming through response in parameter `data` and displaying data .
		.catch((error)=>console.log(error))
	}
	useEffect(()=>{
		fetcpi();
		// fetch("https://jsonplaceholder.typicode.com/posts");//return promise
	},[]);//this `[]` means useEffect will run only once when component mounts





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


	return(
		<div className="container">
		<h1>A Fancy Table</h1>

		<table id="customers">
			<tr>
				<th>Name</th>
				
			</tr>
			<tr>
			<td>
				{count.map((mon,index)=>{
					console.log("count",count);
					return(
				<tr key={index}>					
					<td>{mon.name}</td>
					<td>{mon.url}</td>
					
					
				</tr>);
			})}
			</td>

		</tr>
		</table>

	</div>
	)
	}
