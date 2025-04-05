import { useState } from "react";
import "./index.css"

export const CleanUp=()=>{
    const [count, setCount] = useState(0);

    // setInterval(()=>{
    //     setCount(()=>count+1)
    // },1000)


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
