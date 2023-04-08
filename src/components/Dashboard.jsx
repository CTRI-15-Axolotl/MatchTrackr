import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import PlayerCards from '../dashboard/PlayerCard';
import Searchbar from './Searchbar'
import CardsContainer from '../dashboard/CardsContainer'


export default function Dashboard() {
    return (
      <div >
        <h1>Dashboard</h1>
        <Searchbar />
        {/* <PlayerCards /> */}
        <CardsContainer />
      </div>
    )
}