import { useContext } from "react"
import { BioContext } from "."

export const Servces = ()=>{

    // to get data through contextApi

    const {myName,myAge}=useContext(BioContext)
    return <h2>Hello context Api (Services). My name is {myName} and i am  {myAge} old</h2>
    
}