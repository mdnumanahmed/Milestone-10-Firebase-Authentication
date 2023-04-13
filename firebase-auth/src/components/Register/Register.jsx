import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const auth = getAuth(app)

const Register = () => {
    const [error, setError] = useState('')

    const handleEmailChange = (event) => {
        console.log(event.target.value);
    }
    const handlePassBlur = (event) => {
        console.log(event.target.value);
    }
    const handleSubmit = (event) => {
        // 1. prevent the page refresh
        event.preventDefault()
        // 2. collect data from the form
        const email = event.target.email.value 
        const password = event.target.password.value 
        console.log(email, password);
        // 3. create new user in the firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const createdUser = result.user
            console.log(createdUser);
            // clear the form data after creating user
            event.target.reset()
            // set empty state after creating user
            setError('')
            // show toast after creating user
            toast('User has been successfully created')
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded ps-3' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
                <br /> <br />
                <input className='w-50 rounded ps-3' onBlur={handlePassBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br /> <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Register;