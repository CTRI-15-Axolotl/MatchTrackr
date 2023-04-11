import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

export default function Login() {
    //useState set-up for log-in/authentication stretch feature
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginToDashboard = () => {
        navigate('/dashboard');
    }

    const backToHome = () => {
        navigate('/');
    }

    return (
      <div id="loginPage">
        <form>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                {/* Setting button to automatically navigate to dashboard for now.
                WIP: Updating logic to confirm authentication then transfer to dashboard once confirmed. */}
             <button onClick={loginToDashboard}>Log-In</button>
            </div>
        </form>
        <button onClick={backToHome}>Back to Homepage</button>
      </div>
    )
  }
