import { useState } from "react";

export const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const handleInputChange=(e)=>{

    const {name,Value}=e.target;

    switch (name) {
      case "firstName":
        setFirstname(Value);
        break;
      case "lastName":
        setLastname(Value);
        break;
      case "password":
        setPassword(Value);
        break;
      case "email":
        setEmail(Value);
        break;
      case "phone":
        setPhone(Value);
        break;
    
      default:
        break;
    }
 
    
    
   
    // setFirstname(e.target.Value);
  }
  



  return (
    <>
      <p>
        Hello my name is Avidev Jha ,my email is avidevjha9@gmail.com and phone
        is 7050871501
      </p>
      <form action="">
        <div className="contain">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstname}
            onChange={handleInputChange}

            required
          />
          <br />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            value={lastname}
            onChange={handleInputChange}

            placeholder="Enter Last Name"
            required
          />
          <br />
          <label htmlFor="password">
            <b>password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
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
            value={email}
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
            value={phone}
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
