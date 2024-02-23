import React, {useEffect, useState} from 'react';
import './style.css';
import {Link} from "react-router-dom";
import {auth} from './firebase.jsx';
import {signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/WeatherPlusAPP")
            console.log("Login successfully");


        } catch (err) {
            console.log(err)
        }


    };


    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">
                    Email:
                    <input type="text" onChange={(e) =>setEmail(e.target.value)}/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" onChange={(e) =>setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Login</button> <br/>
                <p>Don't Have an account? <Link to="/">Register</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;