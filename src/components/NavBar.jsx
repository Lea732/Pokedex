function NavBar(props) {
    const { goToPrevious, goToNext, pokemonIndex, pokemonListLength }= props;
    return (
      <div>
        {/* Rendu conditionnel des boutons dans le composant NavBar */}
        {pokemonIndex > 0 && (
          <button onClick={goToPrevious}>Précédent</button>
        )}
        {pokemonIndex < pokemonListLength - 1 && (
          <button onClick={goToNext}>Suivant</button>
        )}
      </div>
    );
  }

export default NavBar