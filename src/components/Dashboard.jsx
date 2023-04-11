import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import PlayerCards from '../dashboard/PlayerCard';
import Searchbar from './Searchbar'
import CardsContainer from '../dashboard/CardsContainer'

// We need to make a fetch request to the server to show our fav players
export default function Dashboard() {

/////////////// TEST PLAYEROBJECT//////////////////
const serverResponse = [{
  name: 'Secret',
  image_url: 'https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png',
  current_team: {acronym: 'MARU'},
  UpcomingMatches: [
      {against: 'Northepcion',
      time: 'Tuesday 5pm ET'},
      {against: 'DRX',
      time: 'Thurdsay 5pm ET'},
      {against: 'Zeta Division',
      time: ' Saturday 5pm ET'}
  ]
}]

// api call to server, server will give up response of the fav info

    return (
      <div >
        <h1>Dashboard</h1>
        <Searchbar />
        {/* <PlayerCards /> */}
        <CardsContainer serverResponse={serverResponse}/>
      </div>
    )
}