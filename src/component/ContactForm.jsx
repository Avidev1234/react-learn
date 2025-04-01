import React, { useState } from "react";

function ContactForm() {
  const [change, setChange] = useState({
    userName:"",
    pass:""
  })
  const handleInputChange=(e)=>{
    const {value,name}=e.target;
    setChange((prev)=>({...prev,[name]:value}))
  }
  const handleSubmitForm=(e)=>{
    e.preventDefault();

    const loginForm={
      userName,
      pass
    }
    console.log(loginForm);
    
  }
  return (
    <div className="container">
      <div className="cardss">
        <h1>
          <strong>Contact Form</strong>
        </h1>
        <form action="" onSubmit={handleSubmitForm}>
          <label htmlFor=""><strong>Username</strong>:</label>
          <input type="text" name="userName" placeholder="Enter name ..." value={change.userName} onChange={handleInputChange} />

          <label htmlFor=""><strong>Password:</strong></label>
          <input type="password" name="pass" placeholder="Enter password...." value={change.pass} onChange={handleInputChange}/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
