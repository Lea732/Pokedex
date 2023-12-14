import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {
    
    useEffect(
      () => {
        alert("Hello pokemon trainer :)");
      },
      []
    );
    
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);
  
    const handlePokemonSelection = (pokemon) => {
      setSelectedPokemon(pokemon);
    };

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        handlePokemonSelection={handlePokemonSelection}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App
