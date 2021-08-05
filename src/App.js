import React, { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';

import ItemComp from './components/item.tsx';

const App = () => {
  const [pokemones, setPokemones] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.pokemontcg.io/v1/cards')
      .then((resp) => setPokemones(resp.data));
  }, []);
  console.log(pokemones);
  return (
    // <div>
      <ItemComp/>
      /* {pokemones?.cards?.map(() => (
        <div><ItemComp/></div>
      ))} */
    // </div>
  );
};

export default App;
