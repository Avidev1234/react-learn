export const EventHandling = () => {

  const handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
 
    alert("Hey I am onclick")
  }
  const handleWelcomeUser = (name = "user") => {
    console.log(`Welcome ${name} to react course`);

  }
  // const handleWelcomeUser = (parameter) => {
  //   console.log(`Welcome ${name} to react course`);

  // }
  
  return (
    <>

      {/* Named function we pass refrence,if you call this function here then it will run without clicking.You need to just pass refrence & not call here  SyntheticBaseEvent will come as a output*/}

      <button className="bg-slate-400 p-2 rounded-md" onClick={handleButtonClick}>Click Me</button>

      {/* Arrow function ,Here synthetic based events doesnot pass without passing `event` as a parameter */}

      {/* In React ,event handlers receive the event object as an argument by default.However when you use arrow function directly in the onClick attribute without passing event explicitly,React doesn't pass the event object to your handler function.This is because the arrow function creates the new function and calls your handler without passing any argument */}

      {/* The below function will not work as  we use fat Arrow function we can't pass refrence */}
      
      {/* <button className="bg-slate-400 p-2 rounded-md" onClick={(event) => handleButtonClick}>Click Me 2</button> */}
      <button className="bg-slate-400 p-2 rounded-md" onClick={(event) => handleButtonClick(event)}>Click Me 2</button>


      <button className="bg-slate-400 p-2 rounded-md" onClick={(event) => console.log(event)}>Inline function</button>


      <button className="bg-slate-400 p-2 rounded-md" onClick={() => alert("Hey I am Inline Event function")}>Inline Arr Fun</button>


      {/* //? Passing Arguments to events Handlers */}


      {/* In the below button by default the result is coming in console to resolve this we have to use Arrow function */}


      {/* <button className="bg-slate-400 p-2 rounded-md" onClick={handleWelcomeUser(name)}>Click Me</button> */}


      <button className="bg-slate-400 p-2 rounded-md" onClick={()=>handleWelcomeUser("Aman")}>Click Me</button>
    </>
  );
};
