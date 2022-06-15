import React, { useState, useReducer } from 'react';

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
            console.log('PASSWORDS DONT MATCH');
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
        <div>
            <h1>I do not have a account</h1>
            <h2>Sign up with your email and password</h2>
            <form className="sign-up-form" onSubmit={handleSignUp}>
                <input
                    type="text"
                    autoComplete="off"
                    name="displayName"
                    id="name"
                    className="input-name"
                    onChange={handleValues}
                    value={displayName}
                    required
                />
                <label htmlFor="name" className="name-label" placeholder="">
                    Display name
                </label>

                <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    className="input-email"
                    onChange={handleValues}
                    value={email}
                    required
                />
                <label htmlFor="email" className="email-label" placeholder="">
                    Email
                </label>

                <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    className="input-password"
                    onChange={handleValues}
                    value={password}
                    required
                />
                <label htmlFor="password" className="password-label">
                    Password
                </label>

                <input
                    type="password"
                    autoComplete="off"
                    name="confirmPassword"
                    id="confirm-password"
                    className="input-confirm-password"
                    onChange={handleValues}
                    value={confirmPassword}
                    required
                />
                <label htmlFor="confirm-password" className="confirm-password-label">
                    Confirm Password
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;
