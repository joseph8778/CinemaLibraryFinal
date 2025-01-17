import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signin() {
        console.log('signing in')
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }

    return (
        <div>
            <div className='signup_form'>
            <h2>Sign In!</h2>
            <div className="signup_inputs">
            <input type="text"
            placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
            <input placeholder='Password' type="password" />
            <button onClick={signin}>Sign in</button> 
            </div>
            </div>
        </div>
    );
}

export default Signin;
