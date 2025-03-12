import "../event.css"

export const EventPropagation = () => {
    const handleGrandParent=()=>{
        console.log("GrandParent Click");
        
    }
    const handleParent=()=>{
        console.log("handleParent Click");
        
    }
    const handleChildClick=(event)=>{
        event.stopPropagation();
        console.log("handleChildClick Click");
        
    }
    return (
        <section className="w-[100%]  main-div">
            <div className="g-div bg-slate-500 p-4 rounded-md w-[90%]" onClickCapture={handleGrandParent}>
                <div className="p-div bg-slate-300 p-4 rounded-md" onClickCapture={handleParent}>
                    <button className="c-div bg-slate-100 p-4 rounded-md w-full flex justify-center" onClickCapture={handleChildClick}>Child Div</button>
                </div>

            </div>
        </section>
    )
}
