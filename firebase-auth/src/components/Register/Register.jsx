import React from 'react';

const Register = () => {
    return (
        <div>
            <h4>Register</h4>
            <form>
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <br /> <br />
                <input type="password" name="password" id="password" placeholder='Your Password' />
                <br /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;