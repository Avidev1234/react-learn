export const Registration = () => {
  return (
    <>
      <form action="">
        <div className="container">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="password">
            <b>password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input type="phone" placeholder="Enter phone" name="phone" required />

          <p>
            By creating an account you agree to our
            <a href="" style={{ color: "dodgerblue" }}>
              Terms & conditions
            </a>
          </p>


          <div className="clearfix">
            <button></button>
          </div>
        </div>
      </form>
    </>
  );
};
