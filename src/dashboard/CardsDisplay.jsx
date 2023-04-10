import React from 'react';
import PlayerCards from '../dashboard/PlayerCard';

    /** Upon Search
     * Frontend sends get request to server with search term
     * Server will make an API req to Pandascore, Server will send frontend a response 
     * loop through the receieved/response Object and add them as attributes to Cards Display
     */

    /** Upon LogIn/landing to dashboard
     * Frontend send request to server to identify this user's fav players
     * Server will make an API req to Pandascore, Server will send frontend a response 
     * loop through the receieved/response Object and add them as attributes to Cards Display
     */


    // Response Example:
    /**
     * [
     *  {name:Asuna, 
     *     team: 100T,
     *     upcomingMatch:5pmetc..},
     *  {name:Zellsis, 
     *     team: C9,
     *     upcomingMatch:5pmetc..},
     * ]
     */

    /*
    example:
    const players = []
    for (const obj in res.body) {
        players.push(<CardsDisplay name=`${name}` team=`${team}`name=`${upcomingMatch}`/>)
    }
    
    */
  // what needs to be displayed: (needs to be propdrilled)
  // Player Name
  // Player Image
  // Team Name
  // Upcoming Matches
    // Match 1
    // Match 2
    // Match 3


/////////////// TEST PLAYEROBJECT//////////////////
// const serverResponse = [{
//     playerName: 'Secret',
//     imgUrls: 'https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png',
//     teamName: 'Maru Gaming',
//     UpcomingMatches: [
//         {against: 'Northepcion',
//         time: 'Tuesday 5pm ET'},
//         {against: 'DRX',
//         time: 'Thurdsay 5pm ET'},
//         {against: 'Zeta Division',
//         time: ' Saturday 5pm ET'}
//     ]
// }]


const CardDisplay = (props) => {
    
const players = []
for (const obj of props.serverResponse) { // serverResponse is the response from the server, will be res.body later
    // console.log(obj.current_team['acronym'] + " THIS IS THE TEAM INFO")
    if (obj.current_team !== null) {
        if(obj.image_url === null){
            obj.image_url = 'http://clipart-library.com/images_k/person-head-silhouette/person-head-silhouette-2.png'
        }
        players.push(<PlayerCards playerName={obj.name} 
            key={obj.name}
            imgUrls={obj.image_url}
            // teamName={obj.current_team['acronym']} 
            teamName={obj.current_team.name} 
            // upcomingMatches={obj.UpcomingMatches}
            />)
    }
}

    return (
        <div> 
            {players}
        </div>
    );
};



export default CardDisplay;