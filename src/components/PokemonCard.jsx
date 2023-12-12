import PropTypes from 'prop-types';

function PokemonCard(props) {
  // Accéder au premier Pokémon du tableau pokemonList
  
  const {pokemon} = props;
  console.log(props);

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;