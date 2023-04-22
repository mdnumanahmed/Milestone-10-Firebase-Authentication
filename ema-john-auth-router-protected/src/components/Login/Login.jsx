import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  
  const {signIn} = useContext(AuthContext)
  
  const handleLogin = (event) => {
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      form.reset()
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form-body" onSubmit={handleLogin}>
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
          <label htmlFor="email">Password</label>
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
          <input
            className="form-control btn-submit"
            type="submit"
            value="Login"
          />
        </div>
      </form>
        <div className="text-center">
        <p className="">
          New to EmaJohn? <Link to="/register">Create New Account</Link>
        </p>
          <div className="divider">-------------------- OR -------------------</div>
          <div>
            <button className="social-login-btn"><FaGoogle color="red"/> Continue with Google</button>
          </div>
        </div>
    </div>
  );
};

export default Login;
