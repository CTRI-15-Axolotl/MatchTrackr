import React, { useState } from 'react'
import SearchResults from './SearchResults';
import { useNavigate } from 'react-router-dom'; 

export default function Searchbar() {
const [searchInput, setSearchInput] = useState("");

    function searchResults(e) {
        setSearchInput(e.target.value)
    }

    function searchPlayer() {
        // fetch(`https://api.pandascore.co/valorant/players?search[name]=${searchInput}`)
        console.log(searchInput)
    }

    // https://api.pandascore.co/lol/players?search[name]=faker
    // we'll send the fetch request to the backend server
    // server will then make an API call and filter the results
    // server will send a response of exactly what we want 

    // this is what we want as our response:
      // Player Name
      // image of the player
      // upcoming match
      



    return (
      <div >
        <input
            type="text"
            placeholder="Favorite Player?" 
            onChange={searchResults}
            value={searchInput}
        />
        <button onClick={searchPlayer}> Search </button>
      </div>
    )
}