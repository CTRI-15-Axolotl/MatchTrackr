import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    //useState set-up for log-in/authentication stretch feature
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signupToDashboard = () => {
        navigate('/dashboard');
    }

    const backToHome = () => {
        navigate('/');
    }

    return (
        <div id="signupPage">
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
             <button onClick={signupToDashboard}>Sign-Up</button>
            </div>
        </form>
        <button onClick={backToHome}>Back to Homepage</button>
      </div>
    )
  }