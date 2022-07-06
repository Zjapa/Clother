import React, { useState, useReducer } from 'react';
import InputForm from '../InputForm/InputForm';
import './SignUp.styles.scss'

import { createNewUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const { displayName, email, password, confirmPassword } = formValues;

    const handleValues = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('PASSWORDS DO NOT MATCH');
            return;
        }

        try {
            const { user } = await createNewUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='sign-up-container'>
            <h1 className='sign-up-title'>I do not have a account</h1>
            <h2 className='sign-up-subtitle'>Sign up with your email and password</h2>
            <form className="sign-up-form" onSubmit={handleSignUp}>
                <InputForm
                    type="text"
                    autoComplete="off"
                    name="displayName"
                    id="name"
                    onChange={handleValues}
                    value={displayName}
                    label="Display name"
                    required
                />

                <InputForm
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    onChange={handleValues}
                    value={email}
                    label="Email"
                    required
                />

                <InputForm
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    onChange={handleValues}
                    value={password}
                    label="Password"
                    required
                />

                <InputForm
                    type="password"
                    autoComplete="off"
                    name="confirmPassword"
                    id="confirm-password"
                    onChange={handleValues}
                    value={confirmPassword}
                    label="Confirm Password"
                    required
                />

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;
