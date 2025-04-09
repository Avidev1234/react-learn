import { useEffect, useState } from "react"
import "./FetchApiobj.css"
export const FetchApiobj= ()=>{
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	// const [user, setUser] = useState({})
// https://pokeapi.co/api/v2/pokemon/${i}
		const [loading,setLoading]=useState(true);

		const API='https://pokeapi.co/api/v2/pokemon?limit=200';
		const fetchdata=()=>{
			fetch(API)
			.then((res)=>res.json())
			.then((data) => 
				{setUser(data);
					setLoading(false)}
			)//storing data coming through response in parameter `data` and displaying data .
			.catch((error)=>{console.log(error);
				setLoading(false)
					setError(error)
				}

				);
			}

				useEffect(()=>{
					fetchdata();
				},[]);

	console.log("user",user);


if(loading)
	return(
		<div>
			<h2>Loading....</h2>
		</div>
	);



		if (error) 
			return(
				<div>
					<h1>Error:{error.message}</h1>
				</div>
		)
		return(
			<div>
				<table id="customers">
					<p>Total Pokémon: {user?.count}</p>
						<tr>
							<div>
								<tr>
									<th>Company</th>
									<th>Contact</th>

								</tr>
									{user?.results?.map(p=>(
										<tr>
											<td key={p.name}>{p.name}</td>
											<td>{p.url}</td>
										</tr>
									))}
							</div>
						</tr>
				</table>
			</div>
		)
	}

