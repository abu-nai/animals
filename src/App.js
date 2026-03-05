import './App.css';
import { useState } from 'react';
import PokemonShow from './PokemonShow';
import mysteryEgg from './pokemonimgs/mysteryEgg.png';

function getRandomPokemon() {
    const pokemon = ['umbreon', 'espeon', 'flareon', 'jolteon', 'vaporeon', 'leafeon', 'glaceon'];

    return pokemon[Math.floor(Math.random() * pokemon.length)];
}

function App() {
    const [pokemon, setPokemon] = useState([]);

    const handleClick = () => {
        setPokemon([...pokemon, getRandomPokemon()]);
    };

    const renderedPokemon = pokemon.map((p, index) => {
        return <PokemonShow name={p} key={index} />
    });

    return (
        <div className="app">
            <img 
            alt="pokemon egg"
            src={mysteryEgg}
            style={{ width: 100 + 'px' }}
            />
            <br/>
            <button onClick={handleClick}>Oh?</button>
            <div className="pokemon-list">{renderedPokemon}</div>
        </div>
    )
}

export default App;