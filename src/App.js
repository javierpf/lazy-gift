import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [pokemones, setPokemones] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.pokemontcg.io/v1/cards')
      .then((resp) => setPokemones(resp.data));
  }, []);
  return (
    <div className="App">
      {pokemones?.cards?.map(() => (
        <div>Pokemon</div>
      ))}
    </div>
  );
};

export default App;
