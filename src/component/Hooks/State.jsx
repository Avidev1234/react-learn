/* eslint-disable react/prop-types */
import { useState } from "react";

export const State = () => {
    // let value = 0;



    // let array=useState() 
    // console.log(array);
    //  here `count` is state variable
    //  here `setCount` is a function to update  state variable
    const [count, setCount] = useState(0);
    console.log("Parent component");
    console.log(useState());

    const HandleButtonClick = () => {
        setCount(() => count + 1)

        // console.log(count);
    }
    return (
        <>
            <div className="main-div">
                <h1>{count}</h1>
                <button onClick={HandleButtonClick} className="bg-slate-400 p-2 rounded-md">Increment</button>
            </div >
            <ChildComponent count={count} />
        </>
    )
}



const ChildComponent = ({ count }) => {

    console.log("child Component");

    return (
        <div className="main-div">
            <h2>Child Component -{count}</h2>
        </div>
    )
}
