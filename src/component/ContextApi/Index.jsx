// import { createContext, useContext } from "react";
import { createContext, use } from "react";


// step-1 component
export const BioContext=createContext();


// step-2 warehouse/store
export const BioProvider=({children})=>{

    const myName="vinod";
    const myAge=25;
    console.log(children);
    
    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
    // if key and value both are same so not need to use "key"
    // return <BioContext.Provider value={{myName:myName,myAge:myAge}}>{children}</BioContext.Provider>
}


// custom Hooks is `useBioContext`

export const useBioContext = ()=>{
    const context=use(BioContext);
    // const context=useContext(BioContext);
    if(context===undefined)
        throw new Error('compoenet must be wraaped with Bio provider')
    return context;
}