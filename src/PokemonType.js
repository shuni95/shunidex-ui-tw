import PokemonTypeMap from "./pokemonTypeMap.json";

function PokemonType(props) {
  const pokemonType = PokemonTypeMap[props.type];

  return (
    <span className={pokemonType.classes + " p-1 px-3 rounded-3xl leading-6 lowercase text-sm font-['Open_Sans']"}>
      {pokemonType.text}
    </span>
  );
}

export default PokemonType;
