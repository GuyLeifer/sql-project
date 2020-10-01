import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserLogin() {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [err, setErr] = useState(null);
    const [link, setLink] = useState(null);

    const getToAccount = async (e, user, password) => {
        e.preventDefault()
        const post = { Name: user, Password: password};
        const { data } = await axios.post('/users/login', post);
        if (data.error !== undefined) {
            setErr(data.error);
        }
        else {
            setLink(true);
        }
    };

    return (
        <div className="userLogin">
            <h1>Log - In</h1>
            <h2>For The Streamer App</h2>
            <form onSubmit={(e) => getToAccount(e, user, password)}>
                <div>
                    <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {err && (
                    <h3>{err}</h3>
                )}
                <div>
                    <input type="submit" value="Enter" />
                </div>
                { link && (
                        <Link to={'/'}>
                            Go Home
                        </Link>
                )}
            </form>   
        </div>
        )
}

export default UserLogin
