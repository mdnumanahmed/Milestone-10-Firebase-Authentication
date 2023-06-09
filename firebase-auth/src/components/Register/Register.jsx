import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Register = () => {
    const [error, setError] = useState('')
    const [notice, setNotice] =  useState('')

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
        const name = event.target.name.value 
        console.log(email, password, name);
        setError('')
        // validate password
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Password should be at least One Upper Case')
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Password should be at least Two Numbers')
            return;
        }
        else if(!password.length >= 6){
            setError('Password should be at least 6 characters')
        }
        // 3. create new user in the firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const createdUser = result.user
            console.log(createdUser);
            // clear the form data after creating user
            event.target.reset()
            // show toast after creating user
            toast('User has been successfully created')
            verifyEmail(createdUser)
            updateUserData(createdUser, name)
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
    }
    const verifyEmail = (user) => {
        sendEmailVerification(user)
        .then(()=>{
            setNotice(`Please check your Email ${user.email} `)
        })
        .catch(error => {
            console.error(error.message);
        })
    }
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName : name
        })
        .then(()=>{
            toast('User Profile updated')

        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <p className='text-info'>{notice}</p>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded ps-3' type="text" name="name" id="name" placeholder='Your name' required />
                <br /> <br />
                <input className='w-50 rounded ps-3' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br /> <br />
                <input className='w-50 rounded ps-3' onBlur={handlePassBlur} type="password" name="password" id="password" placeholder='Your Password' required/>
                <br /> <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p>Already Have an account ? <Link to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;