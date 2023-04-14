import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const Login = () => {

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleSubmit = () => {

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded ps-3' type="email" name="email" id="email" placeholder='Your Email' required />
                <br /> <br />
                <input className='w-50 rounded ps-3' type="password" name="password" id="password" placeholder='Your Password' required/>
                <br /> <br />
                <input type="submit" value="Register" />
            </form>
            <div>========== <span>Or</span> ============</div>
            <div className='d-flex flex-column w-50'>
                <button onClick={handleGoogleSignIn} className='mb-3'>Sign in with Google</button>
                <button onClick={handleGithubSignIn} className='mb-3'>Sign in with Github</button>
                <button className='mb-3'>Sign in with Tweeter</button>
            </div>
        </div>
    );
};

export default Login;