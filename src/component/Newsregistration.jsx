import { useState } from "react";

export const Newregistration = () =>  {
  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    phone:""
  });


  const handleInputChange=(e)=>{

    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value})
    )
  }
 
    const handleFormsubmit=(e)=>{
      e.preventDefault();
    //   const FormData={
    //     firstname,
    //     lastname,
    //     password,
    //     email,
    //     phone
    //   };
    //   console.log(FormData);
      
    }
    
   
    // setFirstname(e.target.Value);
  



  return (
    <>
      <p>
        Hello my name is {user.firstname} {user.lastname} ,my email is {user.email} and phone
        is {user.phone}
      </p>
      <form onSubmit={handleFormsubmit}>
        <div className="contain">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account</p>

          <label htmlFor="firstname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={user.firstname}
            onChange={handleInputChange}
            name="firstname"
            required
          />
          <br />

          <label htmlFor="lastname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={user.lastname}
            onChange={handleInputChange}
            name="lastname"
            required
          />
          <br />
          <label htmlFor="password">
            <b>password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleInputChange}
            name="password"
            required
          />
          <br />
          <label htmlFor="Email">
            <b>Email</b>
          </label>
          <input
            type="Email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleInputChange}
            name="email"
            required
          />
          <br />
          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input type="phone" 
            placeholder="Enter phone"
            value={user.phone}
            onChange={handleInputChange}
            name="phone" 
            required />
          <br />

          <p>
            By creating an account you agree to our
            <a href="" style={{ color: "dodgerblue" }}>
              Terms & conditions
            </a>
          </p>

          <div className="clearfix">
            <button>Sign up</button>
          </div>
        </div>
      </form>
    </>
  );
};
