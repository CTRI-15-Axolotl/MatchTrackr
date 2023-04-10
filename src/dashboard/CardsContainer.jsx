import React from 'react';
import CardsDisplay from '../dashboard/CardsDisplay'
import { useLocation } from 'react-router-dom';

const CardsContainer = props => {

const location = useLocation();

    return(
        <div className='CardsContainer'>
            <header>
                {location.pathname === '/dashboard' ? (<h1>Favorite Players</h1>) : (<h4>Search Result</h4>)}
            </header>
            <CardsDisplay />
        </div>
    )
}

export default CardsContainer;