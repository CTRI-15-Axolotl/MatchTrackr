import React from 'react';
import CardsDisplay from '../dashboard/CardsDisplay'

const CardsContainer = props => {

    // Send a request to server for this user's list of fav players
    // Should recieve Object with fav players and their info
    // loop through the receieved/response Object and add them as attributes to Cards Display
    // wanted response:
    /**
     * [
     *  {name:Asuna, 
     *     team: 100T,
     *     upcoming match:5pmetc..},
     *  {name:Zellsis, 
     *     team: C9,
     *     upcoming match:5pmetc..},
     * ]
     */

    /*
    example:
    for (const i in this)
    
    */



    return(
        <div className='CardsContainer'>
            <CardsDisplay />
        </div>
    )
}

export default CardsContainer;