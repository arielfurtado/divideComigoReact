import React, { useState,useEffect }  from 'react';
import {
  Header,
  Cards
} from './components';
import HttpService from './service/http';
import './reset.scss';

function App() {
  const  [pokemons, getPokemons] = useState({});
  const  [loading, setLoading] = useState(true);

  useEffect(() => {
    
    async function loadData() {
      const {results}  = await HttpService.get('pokemon?limit=100');
      getPokemons(results);
      setLoading(false);
    }

    loadData();   
  }, []);

  return (
    <>
      <Header />
      {!loading &&
        <Cards pokemons={pokemons} />
      }
      
    </>
  );
}

export default App;
