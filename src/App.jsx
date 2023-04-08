import React , { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Homepage.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        {/* Routes navigating to URL links */}
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App





