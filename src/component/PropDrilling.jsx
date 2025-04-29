export const PropDrilling =()=>{
    return (
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
            <h2>Component A</h2>
            <ChildComponents data="React js" />
        </section>
    )
}


const ChildComponents =(props)=>{
    return(
        <>
        <h2>Hello I am Component B</h2>
        <GrandChldComponent data={props.data}/>
        </>
    )
}


const GrandChldComponent =(props)=>{
    return(
        <>
        <h2>Hello I am Component C</h2>
        <GrandgrandChldComponent data={props.data}/>
        </>
    )
}

const GrandgrandChldComponent =(props)=>{
    return(
        <>
        <h2>Hello I love {props.data}</h2>
        
        </>
    )
}

