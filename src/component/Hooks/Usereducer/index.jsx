import { useReducer } from "react"

export const ReducerCom=()=>{


	const reducer =(state,action)=>{
    console.log(state,action);


    if (action.type==="INCREMENT") {
        return state+1;
    }
    if (action.type==="DECREMENT") {
        return state-1;
    }

	}
	const [count , dispatch]=useReducer(reducer,0);
	console.log(useReducer(reducer,0));

	// replacement of useState Hooks is `useReducer`


	return (
		<>
		<div className="container">
			<h2>Hello userReducer Hook</h2>
			<h1>Count:- {count} </h1>
			<button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            {/* as soon as yu call dispatch function automatically reducer function will be called */}
			<button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
		</div>
		</>
	)
} 
