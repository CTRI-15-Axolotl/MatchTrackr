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
        <img src='../../assets/MatchTrackr-logo.png' alt='MatchTrackr logo' />
        <h1>This is the homepage!</h1>
        <button onClick={navigateLogin}>Login</button>
        <button onClick={navigateSignup}>Sign-up</button>
      </div>
    )
  }

 export default Home;