import { useState } from 'react';



function PlayerCards() {
    const [count, setCount] = useState(0);
  
    return (
      <div className="App">
        <h1>dashboard player card</h1>
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
              Kim "Secret" Ha-jin
            </h2>
            {/* an image aligned on the right of the div with the url https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png */}
            <img
              className="player-card__image"
              src="https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png"
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
            <div className="player-card__matches__match">
              <h3>Match 1</h3>
              <p>Value 1</p>
            </div>
            <div className="player-card__matches__match">
              <h3>Match 2</h3>
              <p>Value 2</p>
            </div>
            <div className="player-card__matches__match">
              <h3>Match 3</h3>
              <p>Value 3</p>
            </div>
          </div>
          <div className="player-card__actions">
            <button
              className="player-card__actions__action"
              onClick={() => console.log('Action 1')}
            >
              Action 1
            </button>
            <button
              className="player-card__actions__action"
              onClick={() => console.log('Delete from players')}
            >
              Delete from players
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlayerCards;
  