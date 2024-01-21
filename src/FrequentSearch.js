import { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchData from "./search.json";
import PokedexData from "./pokedex.json";

function FrequentSearchOn(props) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const names = SearchData[props.title];
    if (names) {
      let data = [];
      names.map((name) => data.push(PokedexData[name.toLowerCase()]));
      setPokemonList(data);
    }
  }, []);

  return (
    <div className="mx-2 px-2 mt-2">
      <div className="flex flex-row">
        <span>
          <button onClick={props.onClick}>
            <img src="/icons/objects/pokeball-open.png" alt="Icono Pokeball abierta"/>
          </button>
        </span>
        <span className="text-[peru] text-xl font-bold">
          <button onClick={props.onClick} className="py-2 px-2 rounded-lg">
            {props.emoji} {props.title}
          </button>
        </span>
      </div>
      <div className="mt-2">
        <div className="border-solid border-2 border-[#dba774] p-2">
          <ul className="flex flex-row gap-4 justify-center items-end">
            {pokemonList
              ? pokemonList.map((pokemon, i) => (
                  <li className="text-center">
                    <Link to={"/pkmn/" + pokemon.name.toLowerCase()}>
                      <img className="w-12" src={pokemon.iconSrc} alt={pokemon.name}/>
                    </Link>
                    <Link to={"/pkmn/" + pokemon.name.toLowerCase()}>
                      <span className="text-sm">{pokemon.name}</span>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FrequentSearchOff(props) {
  return (
    <div className="mx-2 px-2 mt-2">
      <div className="flex flex-row">
        <span>
          <button onClick={props.onClick}>
            <img src="/icons/objects/pokeball-close.png" alt="Icono Pokeball cerrada"/>
          </button>
        </span>
        <span className="text-[peru] text-xl font-medium font-[Merienda]">
          <button onClick={props.onClick} className="py-2 px-4 border-2 border-[peru]">
            {props.title}
          </button>
        </span>
      </div>
      <div className="mt-2"></div>
    </div>
  );
}

export class FrequentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { contentVisible: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    event.preventDefault();
    this.setState({ contentVisible: !this.state.contentVisible });
  }

  render() {
    if (this.state.contentVisible) {
      return <FrequentSearchOn onClick={this.toggle} title={this.props.title} />;
    } else {
      return <FrequentSearchOff onClick={this.toggle} title={this.props.title} />;
    }
  }
}
