import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// const serverResponse = [{
//   playerName: 'Secret',
//   imgUrls: 'https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png',
//   teamName: 'Maru Gaming',
//   UpcomingMatches: [
//       {against: 'Northepcion',
//       time: 'Tuesday 5pm ET'},
//       {against: 'DRX',
//       time: 'Thurdsay 5pm ET'},
//       {against: 'Zeta Division',
//       time: ' Saturday 5pm ET'}
//   ]
// }]
//{playerName, imgUrls, teamName, upcomingMatch}

function PlayerCards(props) {
  // using useLocation hook to determine which button to render
  const location = useLocation();

  function favoritePlayer() {
    console.log(props.playerInfo + " PLAYER INFO HERE")
    fetch('http://localhost:3000/fav/searchplayer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.playerInfo)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <div
        className="player-card"
        style={{
          // make the backgroundColor #161419
          backgroundColor: '#161419',
        }}
      >
        <div className="player-card__header"
          style={{
            // make all content in the div stretch the size of the div
            // while still making the player-card__image aligned right
            display: 'flex',
          }}
        >
          <h2
            className="player-card__title"
            style={{
              // align the text left
              textAlign: 'left',
              // make h2 on the same line as the img
              display: 'inline-block',
            }}
          >
            {props.playerName}
          </h2>
          {/* an image aligned on the right of the div with the url https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png */}
          <img
            className="player-card__image"
            src={props.imgUrls}
            alt="Secret"
            style={{
              // make the image aligned on the right
              marginLeft: 'auto',
              // make the image 200 pixels wide
              width: '200px',
            }}
          />
        </div>


        <div className="player-card__matches"
          style={{
            // make divs within player-card__matches not collide with div above
            overflow: 'hidden',
          }}
        >

        {location.pathname === '/dashboard' ?

          (<div>
            <div className="player-card__matches__match">
              <h3>MARU vs Northepcion</h3>
              <p>Tuesday 5:00pm CT </p>
            </div>
            <div className="player-card__matches__match">
              <h3>MARU vs DRX</h3>
              <p>Thursday 6:00 CT</p>
            </div>
            <div className="player-card__matches__match">
              <h3>MARU vs Zeta Division</h3>
              <p>Saturday 5:00 CT</p>
            </div>
          </div>
          )
          : (<p> Matches </p>)

        }

        </div>
        
        <div className="player-card__actions">
          {location.pathname === '/dashboard' ? 
            (<button className="player-card__actions__action" onClick={() => console.log('Delete from players')}>
              Delete
            </button>) 
            : 
            (<button className="player-card__actions__action" onClick={() => favoritePlayer()}>
            Favorite 
            </button>)}
        </div>
      </div>
    </div>
  );
}



  export default PlayerCards;
  
  /* // what needs to be displayed: (needs to be propdrilled)
  // Player Name
  // Player Image
  // Upcoming Matches
    // Match 1
    // Match 2
    // Match 3 */
