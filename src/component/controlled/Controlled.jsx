import { useState } from "react";
import "./controlled.css";
export const Controlled = () => {

const [form, setForm] = useState("");


  const handleSubmitform = (e) => {
    e.preventDefault();
    // const dataValue = document.querySelector("#inputname").value;
    // console.log(dataValue);
    console.log(form);
    
  };
  const handleChange = (e) => {
    setForm(e.target.value)
   
  };


  return (
    <>
      <h2>
        <strong>UnControlled Form</strong>
      </h2>
      <section className="form">
        <form onSubmit={handleSubmitform}>
          <label>Name:</label>
          <input id="inputname" name="name" onChange={handleChange} value={form} type="text" placeholder="Enter Name...." />
        <button>Submit</button>
        </form>
      </section>
    </>
  );
};


// for controlled components we use `value` attribute in input field and useState Hooks and in uncontrolled we use DOM 