import { Link, useNavigate } from "react-router-dom";
import { FrequentSearch } from "./FrequentSearch";
import PokedexData from "./pokedex.json";
import { useEffect, useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const htmlDom = document.getElementsByTagName("html")[0];
        htmlDom.style["background-color"] = "whitesmoke";
    }, []);

    useEffect(() => {
        if (query.length > 1) {
            const results = Object.keys(PokedexData).filter(e => e.indexOf(query) > -1);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const searchingWord = document.getElementById("search").value.toLowerCase();
            const pkmnSearched = searchingWord;

            if (PokedexData[pkmnSearched]) {
                navigate("/pkmn/" + pkmnSearched);
            } else {
                const results = Object.keys(PokedexData).filter(e => e.indexOf(query) > -1);
            if (results.length == 1) {
                navigate("/pkmn/" + results[0]);
            }
          }
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <img className="h-[100px] w-[100px]" src="./pokeball.png" alt="Pokeball" />
                <h1 className="text-4xl text-[peru] text-center font-semibold">ShuniDex</h1>
            </div>
            <div className="flex justify-center">
                <ul className="list-none flex flex-wrap justify-center">
                { suggestions.map((suggestion, index) => 
                    <li key={index} className="ml-2 mt-2 text-md border-solid border-[1px] border-[peru] rounded-md text-[peru]">
                        <Link className="block w-full px-2" to={"/pkmn/" + suggestion}>{suggestion}</Link>
                    </li>
                )}
                </ul>
            </div>

            <div className="flex justify-center mt-2">
                <input
                id="search"
                className="w-60 placeholder:text-gray-400 bg-white border-2 rounded border-solid border-[peru] p-2 focus:ring-[#aa6a2c] focus:ring-2 focus:outline-none md:w-80"
                type="search"
                value={query}
                placeholder="Zorua 🦊"
                onKeyDown={handleKeyDown}
                onChange={event => setQuery(event.target.value)}
                />
            </div>

            <div className="flex flex-col md:items-center mt-4">
                <FrequentSearch title="Favorites" />
                <FrequentSearch title="Most wanted" />
                <FrequentSearch title="Cutest" />
                <FrequentSearch title="Last Gen" />
            </div>
        </div>
    )
}

export default Home;