import { useReducer } from "react"

export const ReducerCom=()=>{

	const initialState={
		count:0,
		inc:2,
		desc:2
	};

	const reducer =(state,action)=>{
		console.log(state,action);


		// if (action.type==="INCREMENT") {
		// 	return state+1;
		// }
		// if (action.type==="DECREMENT") {
		// 	return state-1;
		// }
		// if (action.type==="RESET") {
		// 	return state =0;
		// }
		// Alternative of if satements
		switch (action.type) {
			case "INCREMENT":
				return {
					...state,
					count:state.count+2
				
				};
				
			case "DECREMENT":
				return {
					...state,
					count:state.count-2};
				
			case "RESET":
				return {
					...state,
					count:0
				};
				break;
		
			default: 
			return state;
		}

	}
	const [state , dispatch]=useReducer(reducer,initialState);
	//							 or
	// const [count , dispatch]=useReducer(reducer,0);
	console.log(useReducer(reducer,0));

	// replacement of useState Hooks is `useReducer`


	return (
		<>
		<div className="container">
			<h2>Hello userReducer Hook</h2>
			<h1>Count:- {state.count} </h1>
			<button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
				{/* as soon as yu call dispatch function automatically reducer function will be called */}
			<button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
			<button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
		</div>
		</>
	)
} 
