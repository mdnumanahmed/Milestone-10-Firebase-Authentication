import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)

  const handleSignUp = event => {
    event.preventDefault()
    
    const form = event.target 
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    setError('')
    if(password !== confirm){
      setError('Password not matched!')
      return;
    }else if(password.length < 6){
      setError('Password must be 6 characters or longer')
      return;
    }

    createUser(email, password)
    .then(result => {
      const createdUser = result.user 
      form.reset()
      console.log(createdUser);
    })
    .catch(error => {
      setError(error.message);
    })
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form className="form-body" onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id=""
            required
            placeholder="Enter your Password"
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Enter your Password"
          />
        </div>
        <div>
          <input
            className="form-control btn-submit"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
      <div className="text-center">
        <p className="text-error">{error ? error : ''}</p>
      </div>
      <div className="text-center">
        <p className="">
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
        <div className="divider">
          -------------------- OR -------------------
        </div>
        <div>
          <button className="social-login-btn">
            <FaGoogle color="red" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
