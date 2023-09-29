import { useState, useEffect } from 'react'
import axios from 'axios'


const PokemonTypes = ({ setIsPokemonType, setPokemonType, setIsPaginated }) => {

  const [pokemonByType, setPokemonByType] = useState([])



  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(resp => setPokemonByType(resp?.data?.results))
      .catch(error => console.error(error))

  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    if (e.target.value === "allPokemons") {
      setIsPokemonType(true)
      setIsPaginated(false)
    } else {
      setIsPokemonType(false)
      axios
        .get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
        .then(resp => setPokemonType(resp?.data?.pokemon))
        .catch(error => console.error(error))
        .finally(() => setIsPaginated(true))
    }
  }

  return (

    <div className='select-type'>
      <select onChange={(e) => handleChange(e)}>
        <option value="allPokemons" >Pokémon</option>
        {pokemonByType?.map(type =>
          <option key={type?.url} value={type?.name}>{type.name}</option>
        )
        }
      </select>
    </div>

  )

}

export default PokemonTypes