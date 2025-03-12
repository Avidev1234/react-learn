/* eslint-disable react/prop-types */
export const EventProps = () => {
    const HandleWelcomeUser = () => {
        alert("Welcom user")
    }

    const handleMouseHover = () => {
        alert('Hovering Mouse')
    }
    return (
        <>
            <WelcomeUser onHandleClick={() => HandleWelcomeUser()} onHandleMouseEnter={handleMouseHover} />
        </>
    )
}

 

const WelcomeUser = (props) => {


    // De structuring of props

    // const { onHandleClick, onHandleMouseEnter } = props;
    
    const handleGreeting = () => {
        console.log(`Hey User,Welcome`);
        props.onHandleClick();

    }
    return (
        <>
            <button className="bg-slate-400 p-2 rounded-md" onClick={props.onHandleClick}>Click</button>
            {/* <button className="bg-slate-400 p-2 rounded-md" onClick={onHandleClick}>Click</button> */}
            <button className="bg-slate-400 p-2 rounded-md" onMouseEnter={props.onHandleMouseEnter}>Hover Me</button>
            {/* <button className="bg-slate-400 p-2 rounded-md" onMouseEnter={onHandleMouseEnter}>Hover Me</button> */}
            <button className="bg-slate-400 p-2 rounded-md" onClick={handleGreeting}>Greeting</button>

        </>
    )
}