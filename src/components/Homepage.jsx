import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const navigateSignup = () => {
        navigate('/signup');
    }
  
    return (
      <div >
        <h1>Match Trackr</h1>
        <button onClick={navigateLogin}>Login</button>
        <button onClick={navigateSignup}>Sign-up</button>
      </div>
    )
  }

 export default Home;