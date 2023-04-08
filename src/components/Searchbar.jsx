import React, { useState } from 'react'

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