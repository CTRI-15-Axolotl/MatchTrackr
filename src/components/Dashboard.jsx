import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PlayerCards from './PlayerCard';
import Searchbar from './Searchbar'

export default function Dashboard() {

    
    return (
      <div >
        <h1>Dashboard</h1>
        <Searchbar />
        <PlayerCards />
      </div>
    )
  }