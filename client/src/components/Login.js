import React from 'react';
import UserLogin from './UserLogin';
import UserSignIn from './UserSignIn';

function Login() {
    function userLogin() {
        console.log("Login button was clicked")
        return <UserLogin />
    }
    function userSignIn() {
        console.log("Sign in button was clicked")
        return <UserSignIn />
    }
    return (
        <div className="login">
            <div>Account</div>
            <button onClick={() => userLogin()}>Login</button>
            <button onClick={() => userSignIn()}>Sign In</button>
        </div>
    )
}

export default Login
