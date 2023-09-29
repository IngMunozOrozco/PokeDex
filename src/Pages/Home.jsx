import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../store/slices/name.slice';
import Pokeball from '../assets/Images/Pokebola.png';
import Music from '../../Components/Music'; // Importa el componente Music aquí


const Home = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    if (userName !== '') {
      dispatch(setName(userName));
      navigate('/pokedex');
      localStorage.setItem('userName', userName);
    } else {
      alert('Please, introduce your name');
    }
  };

  return (

    <>
    <Music /> 
    <main className="home">
      <div className="home__items">
       
        <div>
          <form className="home__input" onSubmit={submit}>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="nameId" placeholder="Enter your name" />
            <button type="submit">
              <img src={Pokeball} alt="" />
            </button>
          </form>
        </div>
      </div>
    </main>

    
    </>
  );
  
};

export default Home;