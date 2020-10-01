import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className="login">
            <div>
                <h3>Account</h3>
                <Link to="account/login">
                    <button>Log In</button>
                </Link>
                <Link to="account/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
