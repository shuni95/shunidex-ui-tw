const PokemonTypeMap = {
  ghost: {
    classes: "bg-purple-900 text-white",
    text: "fantasma",
  },
  normal: {
    classes: "bg-gray-500 text-white",
    text: "normal",
  },
  dark: {
    classes: "bg-black text-white",
    text: "siniestro",
  },
  psychic: {
    classes: "bg-[#fc46aa] text-white",
    text: "psíquico",
  },
};

function PokemonType(props) {
  const pokemonType = PokemonTypeMap[props.type];

  return (
    <span
      className={
        pokemonType.classes +
        " p-1 px-3 rounded-3xl leading-6 lowercase text-sm font-['Open_Sans'] italic"
      }
    >
      {pokemonType.text}
    </span>
  );
}

export default PokemonType;
