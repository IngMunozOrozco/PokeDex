import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import ProgressBar from 'react-bootstrap/ProgressBar';


const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail] = useState({})
    const [seePokemon, setSeePokemon] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isUnseen, setIsUnseen] = useState(false)


    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => setPokemonDetail(resp.data))
            .catch(error => console.error(error))
    }, [])

    const goBack = () => {
        navigate('/pokedex')
    }


    return (
        <main>
            <Container>

                <div className="button-back">
                    <button onClick={goBack}><i className='bx bx-arrow-back' ></i></button>
                </div>
                <Row className="poke">
                    <div className="container-banner">
                    </div>

                    <Row className="row-type">

                        <h2 className="detail__tittle">{pokemonDetail?.name} <p># {pokemonDetail?.id}</p> </h2>
                        <img src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt="" />
                        <ul className="list--size">
                            {pokemonDetail?.types?.map(type => (
                                <li className={`round-li ${type.type.name}`} key={type.type.name}>
                                    {type.type.name}
                                </li>

                            ))}
                        </ul>
                        <h3>{pokemonDetail?.height} <span>Height</span></h3>
                        <h3>{pokemonDetail?.weight}<span>Weight </span></h3>
                        <Col className="col col-size" >
                            <div>

                                <ProgressBar label={pokemonDetail?.stats?.[0]?.base_stat} variant="success" now={pokemonDetail?.stats?.[0]?.base_stat} />
                                <p>Hp</p>
                                <ProgressBar label={pokemonDetail?.stats?.[1]?.base_stat} variant="info" now={pokemonDetail?.stats?.[1]?.base_stat} />
                                <p>Attack</p>
                                <ProgressBar label={pokemonDetail?.stats?.[2]?.base_stat} variant="warning" now={pokemonDetail?.stats?.[2]?.base_stat} />
                                <p>Defense</p>
                                <ProgressBar label={pokemonDetail?.stats?.[5]?.base_stat} variant="danger" now={pokemonDetail?.stats?.[5]?.base_stat} />
                                <p>Speed</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                    <Row>
                        <Col className="col">
                        </Col>
                    </Row>


                </Row>
            </Container>
        </main>
    )
}
export default PokemonDetail