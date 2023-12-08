import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [num, setNum] = useState('');
    const [pokemon ,SetPokemon] = useState('');
    const [move, setMove] = useState('');
    useEffect(()=> {
        // alert('hi');
        const getData = async () => {
          try {
          //  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           const ress = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
           const res = await ress.json();
           console.log(res);
           SetPokemon(res.name);
           setMove(res.moves.length)
        }catch(err){
            console.log(err) }
           
        }  
        getData()
    })

  return (<>
    <h1>You Selected {num}</h1>
    <h1>You Choose {pokemon}</h1>
    <h1>It has {move} moves</h1>
    <select onChange={(event) => {
        setNum(event.target.value);
    }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="25">25</option>
    </select>
  </>)
}

export default Pokemon;