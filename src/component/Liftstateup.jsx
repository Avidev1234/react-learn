import { useState } from "react"

export const LiftstateUp = () => {
    const [inputValue, setInputvalues] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputvalues={setInputvalues} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}

// so in this situation both the child components `InputComponent` and `DisplayComponent` have to share the state with each other but it is not possible so it will lift the state up to parent component and parent component will pass state via props.
// eslint-disable-next-line react/prop-types
const InputComponent = ({ inputValue, setInputvalues }) => {


    return (
        <>
            <input type="text" name="" placeholder="Enter Your Name" id="" value={inputValue} onChange={(e) => setInputvalues(e.target.value)} />
        </>
    )
}
// eslint-disable-next-line react/prop-types
const DisplayComponent = ({inputValue}) => {

    return (
        <p>The Current state value is :{inputValue}</p>
    )
}