import { useId } from "react"

export const UseId=()=>{

	// const usernameId=useId();
	// const emailId=useId();
	// const password=useId();
	// // we use `useId` hooks instead o using `useId()` function .
	// return(
	// <form>
	// <div>
	// <label htmlFor={usernameId}>UserName:</label>
	// <input type="text" id={usernameId} name="name" />
	// </div>
	// <div>
	// <label htmlFor={emailId}>Email:</label>
	// <input type="email" id={emailId} name="Email" />
	// </div>
	// <div>
	// <label htmlFor={password}>password:</label>
	// <input type="password" id={password} name="password" />
	// </div>
	// <button type="submit">Submit</button>
	// </form>
	// )

	// This lets you to avoid calling useId for every single element that needs a unique ID.

	const id=useId();

	// we use `useId` hooks instead o using `useId()` function .
	return(
		<form>
			<div>
				<label htmlFor={id+"usernameId"}>UserName:</label>
				<input type="text" id={id+"usernameId"} name="name" />
			</div>
			<div>
				<label htmlFor={id+"emailId"}>Email:</label>
				<input type="email" id={id+"emailId"} name="Email" />
			</div>
			<div>
				<label htmlFor={id+"password"}>password:</label>
				<input type="password" id={id+"password"} name="password" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}
