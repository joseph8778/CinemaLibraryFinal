import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {

    function signin() {
        console.log('signing in')
    }

    return (
        <div>
            <div className='signup_form'>
            <h2>Sign In!</h2>
            <div className="signup_inputs">
            <input type="text"
            placeholder='Email' />
            <input placeholder='Password' type="password" />
            <button onClick={signin}>Sign in</button> 
            </div>
            </div>
        </div>
    );
}

export default Signin;
