import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokedexData from "./pokedex.json";
import PokemonTypeMap from "./pokemonTypeMap.json";
import PokemonType from "./PokemonType";

function PokemonDetail() {
  const params = useParams();
  const [effect, setEffect] = useState("");
  const [pkmn, setPkmn] = useState({});
  const [nextPkmn, setNextPkmn] = useState("");
  const navigate = useNavigate();

  function EvolutionButton(props) {
    const evolutionButtonHandler = (e, evolution) => {
      e.preventDefault();
      props.onSetEffect("animate-evolution");
      setNextPkmn(evolution);
    };

    return (
      <button
        className="bg-stone-500 text-white bg-opacity-75 rounded-lg p-1 relative right-36 md:right-0 w-[50px] shrink-0 text-sm"
        onClick={(e)=> evolutionButtonHandler(e, props.data.evolution)}
      >
        {props.data.imgSrc ? <img src={props.data.imgSrc} title={props.data.text} alt={props.data.text}/> : props.data.text}
      </button>
    );
  }

  function PreEvolutionButton(props) {
    const preEvolutionButtonHandler = (e) => {
      e.preventDefault();
      props.onSetEffect("animate-preevolution");
    };

    return (
      <button
        className="bg-gray-600 text-white bg-opacity-75 rounded-lg p-1 relative right-36 w-[50px] shrink-0 text-sm"
        onClick={preEvolutionButtonHandler}
      >
        {"🔙"}
      </button>
    );
  }

  useEffect(() => {
    const pokemonData = PokedexData[params.name];
    setPkmn(pokemonData);
  }, []);

  useEffect(() => {
    document.title = pkmn.name;

    if (pkmn.types) {
      let bgColor;
      if (pkmn.types.length === 1) {
        bgColor = PokemonTypeMap[pkmn.types[0]].bgColor;
      } else {
        // Use first type, except if it's normal
        if (pkmn.types[0] !== "normal") {
          bgColor = PokemonTypeMap[pkmn.types[0]].bgColor;
        } else {
          bgColor = PokemonTypeMap[pkmn.types[1]].bgColor;
        }
      }
      document.getElementsByTagName("html")[0].style["background-color"] = bgColor;
    }

    setTimeout(() => {
      document.getElementById("papyrus-box").style["height"] =
      document.getElementById("description").offsetHeight + 20 + "px";
    }, 300);
    
  }, [pkmn]);

  const animationEndsHandler = (e) => {
    switch (e.animationName) {
      case "evolution":
        setEffect("animate-appear");
        setPkmn(PokedexData[nextPkmn]);
        navigate("/pkmn/" + nextPkmn);
        break;
      case "appear":
        break;
      case "preevolution":
        setEffect("animate-appear");
        setPkmn(PokedexData[pkmn.preEvolution]);
        navigate("/pkmn/" + pkmn.preEvolution);
        break;
    }    
  };

  return (
    <section className="flex flex-col mt-1">
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold font-[Merienda]">{pkmn.name}</h1>
          </div>
          <div className="flex relative justify-center items-end mt-2">
            <img
              id="image"
              className={effect + " m-auto w-[240px]"}
              src={pkmn.imageSrc}
              alt={pkmn.name}
              onAnimationEnd={animationEndsHandler}
            />
            <div className="grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(3,_1fr)] gap-2 w-0 md:relative md:right-[37%]">
              {pkmn.evolutions
                ? pkmn.evolutions.map((evolution, i) => (
                    <EvolutionButton key={i} onSetEffect={setEffect} data={evolution} />
                  ))
                : ""}
              {pkmn.preEvolution ? <PreEvolutionButton onSetEffect={setEffect} /> : ""}
            </div>
          </div>
          <div className="flex justify-center mt-2 gap-1">
            {pkmn.types ? pkmn.types.map((type, i) => <PokemonType key={i} type={type} />) : ""}
          </div>
          <div className="flex justify-center mb-1">
            <span className="text-sm italic">{pkmn.title}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-2 pl-4 items-center mt-1 mb-3 md:w-8/12 md:ml-[16.6%] lg:w-1/2 lg:ml-[25%]">
          <div
            id="papyrus-box"
            style={{ filter: "url(/filter.svg#waves)" }}
            className="shadow-papyrus absolute left-[5px] right-[10px] bg-[#faebd7] md:left-[16%] md:right-[16%] lg:left-[25%] lg:right-[25%]"
          ></div>
          <p id="description" className="text-sm z-10 font-[Merienda] p-1 pr-4 md:relative">
            «{pkmn.description}»
          </p>
        </div>        

      <div className="flex flex-row mt-2 md:w-1/2 md:ml-[25%]">
        <div className="flex flex-col basis-1/2 items-center">
          <h2 className="font-bold mb-2">Ubicaciones</h2>
          <ul className="list-none space-y-2 text-center">
            {pkmn.locations
              ? pkmn.locations.map((location, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold">{location.section}</span>
                    :&nbsp;
                    <span>{location.zones.join(", ")}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className="flex flex-col basis-1/2 items-center">
          <h2 className="font-bold mb-2">Débil contra</h2>
          <ul className="list-none space-y-2">
            {pkmn.weakAgainst
              ? pkmn.weakAgainst.map((type, i) => (
                  <li key={i}>
                    <PokemonType type={type} />
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>

      <div className="flex flex-row mt-2 md:w-1/2 md:ml-[25%]">
        <div className="flex flex-col basis-1/2 items-center">
          <h2 className="font-bold">Objetos</h2>
          <ul className="list-none text-center">
            {pkmn.items
              ? pkmn.items.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className="flex flex-col basis-1/2 items-center">
          <h2 className="font-bold">Alimento preferido</h2>
          <ul className="list-none text-center">
            {pkmn.meals
              ? pkmn.meals.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetail;
