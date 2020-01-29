import React, {useState,useEffect} from 'react';
import './style.scss';

import HttpService from '../../../service/http';

function CardItem({name}) {
    const  [pokemon, getPokemon] = useState('');
    useEffect(() => {
    
        async function loadData() {            
            const {sprites} = await HttpService.get('pokemon/' + name);
            getPokemon(sprites.front_default);
        }

        loadData();   
    }, [pokemon, name]);
    
    return(
        <div className="card-item">
            <img src={pokemon} alt=""/>
            <h4>{name}</h4>
        </div>
    )
};

export default CardItem;