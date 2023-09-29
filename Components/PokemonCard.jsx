import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
const PokemonCard = ({ url }) => {
    const [pokemonDetail, setPokemonDetail] = useState({});

    useEffect(() => {
        axios
            .get(url)
            .then(resp => setPokemonDetail(resp?.data))
            .catch(error => console.error(error));
    }, []);

    const getTypeColor = (type) => {
        switch (type) {
            case 'grass':
                return '#78C850'; 
            case 'water':
                return '#6390F0'; 
            case 'normal':
                return '#A8A77A'; 
            case 'poison':
                return '#A33EA1';  
            case 'fire':
                return '#F08030'; 
            case 'electric':
                return '#F7D02C'; 
            case 'ice':
                return '#96D9D6'; 
            case 'fighting':
                return '#C22E28'; 
            case 'ground':
                return '#E2BF65'; 
            case 'flying':
                return '#A98FF3'; 
            case 'psychic':
                return '#F95587'; 
            case 'bug':
                return '#A6B91A'; 
            case 'rock':
                return '#B6A136'; 
            case 'ghost':
                return '#735797'; 
            case 'dragon':
                return '#6F35FC'; 
            case 'dark':
                return '#705746'; 
            case 'steel':
                return '#B7B7CE'; 
            case 'fairy':
                return '#D685AD';
            default:
                return ''; 
        }
    };

    const firstType = pokemonDetail?.types?.[0]?.type?.name; 

    return (
        <main>
            {pokemonDetail && Object.keys(pokemonDetail).length > 0 && (
                <div style={{ backgroundColor: getTypeColor(firstType) }} className="pokemon-card">
                    <Link className="link" to={`/pokedex/${pokemonDetail.id}`}>
                        <div className="pokemon-card__text">
                        <h2><span>{formatName(pokemonDetail?.name)}</span></h2>
         
                        <img className="img-poke img-poke--over" src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt="Error" />
                            <ul className="types circle">
                                <span>Types:</span>
                                {pokemonDetail?.types?.map(type =>
                                    <li key={type?.type?.name}>{type?.type?.name}</li>
                                )}
                            </ul>
                            <p className="circle circle--small"><span>hp:</span> {pokemonDetail?.stats?.[0]?.base_stat}</p>
                            <p className="circle circle--medium"><span>Attack:</span> {pokemonDetail?.stats?.[1]?.base_stat}</p>
                            <p className="circle circle--medium"><span>Defense: </span>{pokemonDetail?.stats?.[2]?.base_stat}</p>
                            <p className="circle circle--medium"><span>Speed:</span> {pokemonDetail?.stats?.[5]?.base_stat}</p>
                        </div>
                       
                    </Link>
                </div>
            )}
        </main>
    );
}

export default PokemonCard;
