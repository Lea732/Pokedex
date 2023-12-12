
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  // Accéder au premier Pokémon du tableau pokemonList
  const pokemon = pokemonList[1];

  return (
    <figure>
      {/* Vérifier si l'image du Pokémon est disponible */}
      {pokemon.imgSrc ? (
        // Si oui, afficher l'image
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        // Sinon, afficher un paragraphe avec le texte "???"
        <p>???</p>
      )}
      {/* Afficher le nom du Pokémon */}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;