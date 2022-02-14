import { useNavigate } from "react-router-dom";
import { FrequentSearch } from "./FrequentSearch";
import PokedexData from "./pokedex.json";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const htmlDom = document.getElementsByTagName("html")[0];
    htmlDom.style["background-color"] = "whitesmoke";
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const pkmnSearched = document.getElementById("search").value.toLowerCase();

      if (PokedexData[pkmnSearched]) {
        navigate("/pkmn/" + pkmnSearched);
      } else {
        alert("Pokemon no encontrado 😢");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="h-[100px] w-[100px]" src="./pokeball.png" alt="Pokeball" />
        <h1 className="text-4xl text-[peru] text-center font-semibold">ShuniDex</h1>
      </div>

      <div className="flex justify-center mt-2">
        <input
          id="search"
          className="w-60 placeholder:text-gray-400 bg-white border-2 rounded border-solid border-[peru] p-2 focus:ring-[#aa6a2c] focus:ring-2 focus:outline-none md:w-80"
          type="search"
          placeholder="Zorua 🦊"
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="flex flex-col md:items-center mt-4">
        <FrequentSearch title="Favorites" />
        <FrequentSearch title="Most wanted" />
        <FrequentSearch title="Cutest" />
        <FrequentSearch title="Last Gen" />
      </div>
    </div>
  );
}

export default App;
