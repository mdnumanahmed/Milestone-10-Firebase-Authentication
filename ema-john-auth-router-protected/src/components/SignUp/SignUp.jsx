import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form-body">
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
            value="Login"
          />
        </div>
      </form>
        <div className="text-center">
        <p className="">
          Already Have an Account? <Link to="/register">Login</Link>
        </p>
          <div className="divider">-------------------- OR -------------------</div>
          <div>
            <button className="social-login-btn">Continue with Google</button>
          </div>
        </div>
    </div>
    );
};

export default SignUp;