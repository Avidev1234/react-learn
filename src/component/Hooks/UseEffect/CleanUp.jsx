import { useEffect, useState } from "react";
import "./index.css"

export const CleanUp=()=>{
	const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{
        setCount((prev)=>prev+1)
        },1000);

        return ()=>clearInterval(timer);//cleaan up function 


    },[]);


	return(
		<div className="w-[100%] ">
			<div className="w-[100%] flex p-4 justify-center flex-col">
				<div className="mx-auto">
					<h1><strong>Clean Up Function</strong></h1>
					<p>Subscription : {count}</p>
				</div>
			</div>
		</div>

		)
}
