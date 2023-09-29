import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonCard from '../../Components/PokemonCard'
import Paginate from '../../Components/Paginate'
import PokemonTypes from '../../Components/PokemonTypes'
import inter from "/inter.png"
import ball2 from "/ball2.gif"


const Pokedex = ({ pokemonsPerPage }) => {


    const [ pokemonList, setPokemonList ] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1)
    const [ isPaginated, setIsPaginated ] = useState(false)

    const [ name, setName ] = useState([])
    const [ isName, setIsName ] = useState(false)

    const [ isPokemonType, setIsPokemonType ] = useState(true)
    const [ pokemonType, setPokemonType ] = useState([])

    const [isOn, setIsOn] = useState(false);


    const navigate = useNavigate()


    const goBack = () => {
        navigate("/")
        localStorage.removeItem('userName')
    }

    useEffect(() => {

    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0")
    .then(resp => setPokemonList(resp?.data?.results))
    .catch(error => console.error(error))
  
}, [])

 const user = localStorage.getItem('userName')

 //Get pokemons
 const indexOfLastPokemon = currentPage * pokemonsPerPage;
 const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
 const currentPokemons = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon)

 //Pagination per types

const currentPokemonsType = pokemonType.slice(indexOfFirstPokemon, indexOfLastPokemon)

 //Change page


//Redirect config page
const configPage = () => {
        navigate('/pokedex/config')
}

    return(
        <main className='pokedex'>
            <div className='pokedex__exit'>
                <button onClick={goBack}><i className='bx bx-exit bx-rotate-180' ></i></button>
            </div>
            
            <h1 className='pokedex__title'> <img className='ball' src={ball2} alt="" /> <img className='logot' src={inter} alt="" /> </h1>
     
            {isOn? 
                <PokemonByName setIsName={setIsName} setName={setName} pokemonList={pokemonList} name={name}/>
                :
                <PokemonTypes setIsPokemonType={setIsPokemonType} setPokemonType={setPokemonType} setIsPaginated={setIsPaginated}/>           
            }
            <ul>
                {isName? <PokemonCard url={name} /> : isPokemonType ?           currentPokemons?.map(element => 
                    <li key={element.name}>
                        <PokemonCard url={element.url}/>
                    </li>) : 
                    currentPokemonsType?.map(type => 
                    <li key={type?.pokemon?.url}>
                    <PokemonCard url={type?.pokemon?.url}/>
                    </li> )
                }
            </ul>
            
            <div className={ `pagination ${isName? "is-Invisible" : ""}`}>
                <Paginate pokemonsPerPage={pokemonsPerPage} totalPokemons=    {pokemonList.length } setCurrentPage={setCurrentPage} totalPokemonsType={pokemonType.length} isPaginated={isPaginated}/>
            </div>  
        </main>
    )
} 


export default Pokedex