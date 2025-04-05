
import { useState } from "react"
import "./index.css"
import { useEffect } from "react";
export const UseEffectChallange=()=>{
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const handleIncrementClick=()=>{
		setCount(()=>count+1);
	}
    const handleChangeName=(e)=>{
        setName(()=>e.target.value)
    }
    useEffect(()=>{
        console.log(name);
        
    },[name]);


    useEffect(()=>{
        document.title=`count: ${count}`
    },[count])
	return (
		<div className="w-[100%] ">
			<div className="w-[100%] flex p-4 justify-center flex-col">
				<div className="mx-auto">
					<h1><strong>UseEffect Challenge</strong></h1>
					<p>count:{count}</p>
					<button className="w-[50%] cursor-pointer" onClick={handleIncrementClick}>Increment</button>
					<p>Name: {name}</p>
					<input type="text" value={name} name="name" onChange={handleChangeName} />
				</div>
					</div>
		</div>
	)
}
