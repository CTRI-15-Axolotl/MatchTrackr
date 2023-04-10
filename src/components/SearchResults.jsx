import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardsContainer from '../dashboard/CardsContainer';

export default function SearchResults() {
  let { searchInput } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/fav/searchplayer?player=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data)
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div >
      {console.log(searchInput)}
      <h1>Search Results for "{searchInput}"</h1>
      <CardsContainer serverResponse={searchResults}/>
    </div>
  )
}


// -----------------------
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export default function SearchResults() {
//   const { searchInput } = useParams();
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3000/${searchInput}`)
//       .then(response => response.json())
//       .then(data => setSearchResults(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Search Results for "{searchInput}"</h1>
//       <div>
//         {searchResults.map(result => (
//           <div key={result.id}>
//             <h2>{result.title}</h2>
//             <p>{result.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
