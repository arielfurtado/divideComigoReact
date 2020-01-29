import React from 'react';
import CardItem from './card-item';

import './style.scss';

function Cards({pokemons}) {
    return(
        <div className="cards-wrapper">
            {pokemons.map((item, index) =>
                <CardItem key={index} name={item.name} />
            )}
            
        </div>
    )
};

export default Cards;