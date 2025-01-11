import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Fieldset, Input,  } from "@chakra-ui/react"
import { Field } from "../components/ui/field"
import { RiArrowRightLine } from "react-icons/ri"
import { PasswordInput } from "../components/ui/password-input"

const SignupForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [form, setForm] = useState(false);
const [user, setUser] = useState(null)

const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [formValid, setFormValid] = useState(true);

function handleSubmit(event) {
  event.preventDefault()
  let valid = true

  const form = event.target
  const emailInput = form.elements['email'];
  const passwordInput = form.elements['password'];

  if (!emailInput.checkValidity()) {
    setEmailError(emailInput.validationMessage)
    valid = false
  }

  if(!passwordInput.checkValidity()) {
    setPasswordError(passwordInput.validationMessage);
    valid = false
  }

  setFormValid()
}

 useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setForm(true);
      } else {
        setUser(null);
        setForm(false);
      }
    });

      return () => checkLogin();
    }, [])



function register() {

console.log('registered')
createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
  alert(`${user.email} has been successfully registered and logged in!`)
    setForm(true)
})
.catch(() => {
console.error();
})
}

    return (
    <div className='signup_form'>
        { form ? ( <Link to='/search'>
          <Button 
          colorPalette="red" 
          variant="solid">
        Explore Movies <RiArrowRightLine />
      </Button>
        </Link>) 
            : 
        (
        <Fieldset.Root size="lg" maxW="md" invalid>
          <h1>Create your account</h1>
                <Fieldset.Content className='form'>
                   <Field color='white' label="Email address" invalid>
                      <Input
                      color="white"
                      background='gray.focusRing' 
                      onChange={(event) => setEmail(event.target.value)} name="email" 
                      placeholder='me@example.com'
                      type="email"
                      id="email"
                      required
                      />
                    </Field>
                    <Fieldset.ErrorText>
                     
                    </Fieldset.ErrorText>
            
                    <PasswordInput
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    color="white"
                    background='gray.focusRing'  />
                </Fieldset.Content>
                  <Button 
                  className='form_button'
                  onClick={register} 
                  type="submit" 
                  alignSelf="flex-start">
                    Sign Up!
                  </Button>

        </Fieldset.Root>
            )
        }
    </div>
    );
}

export default SignupForm;
