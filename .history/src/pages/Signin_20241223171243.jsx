import React from 'react';

const Signin = () => {
    return (
        <div>
            <div className='signup_form'>
            <h2>Sign Up!</h2>
            <div className="signup_inputs">
            <input type="text"
            placeholder='Email' />
            <input placeholder='Password' type="password" />
            <button onClick={register}>Sign Up</button> 
            </div>
            </div>
        </div>
    );
}

export default Signin;
