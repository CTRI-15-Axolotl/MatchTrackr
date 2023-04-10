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

// const players = []
// for (const obj of props.serverResponse) { // serverResponse is the response from the server, will be res.body later
//     // console.log(obj.current_team['acronym'] + " THIS IS THE TEAM INFO")
//     players.push(<PlayerCards playerName={obj.name} 
//         key={obj.name}
//         imgUrls={obj.image_url}
//         teamName={obj.current_team['acronym']} 
//         // upcomingMatches={obj.UpcomingMatches}
//         />)
// }

    return (
      <div >
        <h1>Dashboard</h1>
        <Searchbar />
        {/* <PlayerCards /> */}
        <CardsContainer serverResponse={serverResponse}/>
      </div>
    )
}