import '../App.css';
import { useState, useEffect } from 'react';
import '../button.css';
import Button from './Button';
import MediaCard from './MediaCard';
import useCounter from '../hooks/useCounter';

function Pokedex() {

    const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
    const [count, increment, decrement] = useCounter(1, 1, 1, 151);
    const [pokemon, setPokemon] = useState({ sprites: {}, weight: 0, abilities: [] });
    const [loading, setLoading] = useState(false);
    const [weaknesses, setWeaknesses] = useState([]);
    const [stats, setStats] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);

    useEffect(() => {
        fetch(`${pokeApiDomain}${count}`)
            .then(response => response.json())
            .then((data) => {

                setPokemon(data);
                setPokemonType(data.types.map((type) => type.type.name))

                const typeUrls = data.types.map(type => type.type.url);
                typeUrls.map((url) => fetch(url)
                    .then((r) => r.json())
                    .then((res) => setWeaknesses(res.damage_relations.double_damage_from)));

                setStats(data.stats)

                setLoading(false)
            })
            .catch((err) =>
                console.log(err))
    }, [count]);

    return (
        <div className="App">
            <div>
                <Button onClick={decrement} text={'<<'} />
            </div>
            <div>
                {loading ? (
                    <></>
                ) : (
                    <div>
                        <MediaCard
                            id={count}
                            name={pokemon.name}
                            image={pokemon.sprites.front_default}
                            weight={pokemon.weight}
                            abilities={pokemon.abilities.map(item => (item.ability.name))}
                            weaknesses={weaknesses.map(weakness => (weakness.name))}
                            type={pokemonType}
                            stats={stats}
                        />
                    </div>
                )
                }
            </div>
            <div>
                <Button onClick={increment} text={'>>'} />
            </div>
        </div>
    );
}

export default Pokedex;