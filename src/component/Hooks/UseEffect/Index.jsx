import { useEffect, useState } from "react";
import "./index.css";

export const Index = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000); //for every one section of changes
  }, []);

  // ++++++++or+++++++++

  // const [date,setDate]=useState(0);
  // const TimeInterval=setInterval(()=>{
  // const updatedDate=new Date();
  // setDate(updatedDate.toLocaleTimeString())
  // },1000)//for every one section of changes

  // useEffect(() => {
  // TimeInterval

  // }, []);

  // const [count,setCount]=useState(0)
  // useEffect(()=>{
  // console.log('Hello useEffect',count);

  // },[count])//dependency array: Will tell when the useEffect hook will re-run again .If any value in the array changes the effect will re-run.
  return (
    <>
      <div className="container effect-container">
        <h2>Use Effect</h2>
        <h2>Date:{date}</h2>
        {/* <p>count : {count}</p>

				<button onClick={()=>setCount(count+1)}>Click</button> */}
      </div>
    </>
  );
};
