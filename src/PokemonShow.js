import './PokemonShow.css';
import {useState} from 'react';
import espeon from './pokemonimgs/espeon.png';
import flareon from './pokemonimgs/flareon.png';
import glaceon from './pokemonimgs/glaceon.png';
import jolteon from './pokemonimgs/jolteon.png';
import leafeon from './pokemonimgs/leafeon.png';
import umbreon from './pokemonimgs/umbreon.png';
import vaporeon from './pokemonimgs/vaporeon.png';
import excitedMark from './pokemonimgs/excitedMark.png'
import pecha from './pokemonimgs/pecha.png'
import pokeDoll from './pokemonimgs/pokeDoll.png'
import rareCandy from './pokemonimgs/rareCandy.png'

const pngMap = {
    espeon,
    flareon,
    glaceon,
    jolteon,
    leafeon,
    umbreon,
    vaporeon
}

function PokemonShow({ name }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className="pokemon-show" onClick={handleClick}>
            <img
            className="pokemon"
            alt="pokemon"
            src={pngMap[name]}
            style={{ width: 200 + 'px'}}
            />
            <img
                className="heart"
                alt="heart"
                src={excitedMark}
                style={{ width: 40 + 10 * clicks + 'px' }}
            />
            <img
                className="candy"
                alt="candy"
                src={rareCandy}
                style={{ width: 40 + 'px' }}
            />
            <img
                className="pecha"
                alt="pecha"
                src={pecha}
                style={{ width: 40 + 'px' }}
            />
            <img
                className="doll"
                alt="doll"
                src={pokeDoll}
                style={{ width: 40 + 'px' }}
            />
        </div>
    )
}

export default PokemonShow;