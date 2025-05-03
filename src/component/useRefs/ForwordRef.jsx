import { useId, useRef } from "react"
// import { forwardRef, useId, useRef } from "react"

export const ForwordRef=()=>{


	const userName=useRef(null);
	const password=useRef(null);
	const handleFormsubmit=(e)=>{
		e.preventDefault();
			console.log(userName.current.value,password.current.value);
	}
	return(
		<form onSubmit={handleFormsubmit}>
			<BeforeReact19 labels="username" ref={userName} />
			<BeforeReact19 labels="password" ref={password} />
				<button>Submit</button>
		</form>
	)
}

// Data passing from parent to child without rendering the components

// const BeforeReact19=forwardRef((props,ref)=>{
// const id=useId();
// return (
// <div>
// <label htmlFor={id}>{props.label}</label>
// <input type="text" placeholder="Enter..." ref={ref}/>
// </div>
// )
// })

// After v-19

// const BeforeReact19=(props)=>{
    // or destrucuring
const BeforeReact19=({label,ref})=>{
	const id=useId();
		return (
			<div>
				<label htmlFor={id}>{label}</label>
				{/* <label htmlFor={id}>{props.label}</label> */}
				<input type="text" placeholder="Enter..." ref={ref}/>
				{/* <input type="text" placeholder="Enter..." ref={props.ref}/> */}
			</div>
		)
};
