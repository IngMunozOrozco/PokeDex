import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import PokemonDetail from "./Pages/PokemonDetail";
import ProtectedRoute from "../Components/ProtectedRoute";


function App() {

  const [ pokemonsPerPage, setPokemonsPerPage ] = useState(15)
  

  return (
    <>
      <HashRouter>
       
        <Routes>
        
        <Route path="/" element={ <Home/>}/> 
        <Route element={<ProtectedRoute/>}> 
          <Route path="/pokedex" element={ <Pokedex pokemonsPerPage={pokemonsPerPage}/>}/> 
          <Route path="/pokedex/:id" element={ <PokemonDetail/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;