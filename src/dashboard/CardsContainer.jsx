import React from 'react';
import CardsDisplay from '../dashboard/CardsDisplay'

const CardsContainer = props => {

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



    return(
        <div className='CardsContainer'>
            <CardsDisplay />
        </div>
    )
}

export default CardsContainer;