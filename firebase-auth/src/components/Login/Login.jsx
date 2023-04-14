import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const auth = getAuth(app)
const Login = () => {
    const [error, setError] = useState('')
    
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = () => {
        setError('')
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            toast('User logged in by Google successfully ')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
        })
    }

    const handleGithubSignIn = () => {
        setError('')
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            toast('User logged in by Github successfully')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            toast('User logged in by Email successfully')
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message)
            
        })

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded ps-3' type="email" name="email" id="email" placeholder='Your Email' required />
                <br /> <br />
                <input className='w-50 rounded ps-3' type="password" name="password" id="password" placeholder='Your Password' required/>
                <br /> <br />
                <input type="submit" value="Login" />
            </form>
            <div>========== <span>Or</span> ============</div>
            <div className='d-flex flex-column w-50'>
                <button onClick={handleGoogleSignIn} className='mb-3'>Sign in with Google</button>
                <button onClick={handleGithubSignIn} className='mb-3'>Sign in with Github</button>
                <button className='mb-3'>Sign in with Tweeter</button>
            </div>
            <p>Are you first time here ? <Link to='/register'>Please Register</Link></p>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;