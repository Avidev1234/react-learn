import { createContext } from "react";


// step-1 component
export const BioContext=createContext();


// step-2 warehouse/store
export const BioProvider=({children})=>{

    const myName="vinod";
    const myAge=25;
    console.log(children);
    
    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
}