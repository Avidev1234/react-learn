import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput=(e)=>{
    const {name,value}=e.target;
    setUsername((prev)=>({...prev,[name]:value}))
  }

  const handleSubmitUser=(e)=>{
    
        e.preventDefault();

        const loginData={
          username,
          password
        };
        console.log(loginData);
        
  }
  return (
    <div className="container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmitUser}>
        <label htmlFor="">Username</label>
        <input type="text"
          name="username" 
          value={username.username}
          placeholder="Enter User Name"
          onChange={handleChangeInput} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" placeholder="Enter password" value={username.password} onChange={handleChangeInput} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
