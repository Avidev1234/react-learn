import { use } from "react"
// or
// import { useContext } from "react"
import { BioContext } from "./ContextApi"


export const About = ()=>{

	// to get data through contextApi

	const newHook=true;
	let myName,myAge;

	if(newHook){
		( {myName,myAge}=use(BioContext))
	}
	// or 
	// const {myName,myAge}=useContext(BioContext)
	return <h2>Hello context Api . My name is {myName} and i am {myAge} old</h2>

}
