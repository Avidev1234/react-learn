export const State2 = () => {
    return (
        <>
            <ParentComponet>
                <ChildComponet />
                <ChildComponet2 />
            </ParentComponet>
        </>

    )
}

export const ParentComponet = () => {
    console.log("This is a Parent component");

}
export const ChildComponet = () => {
    console.log("This is a ChildComponet");

}
export const ChildComponet2 = () => {
    console.log("This is a ChildComponet");

}