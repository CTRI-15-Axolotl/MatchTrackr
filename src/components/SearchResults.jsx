import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CardsContainer from '../dashboard/CardsContainer';

export default function SearchResults() {
  let { searchInput } = useParams();

    return (
      <div >
        {console.log(searchInput)}
        <h1>Search Results for "{searchInput}"</h1>
        <CardsContainer />
      </div>
    )
  }