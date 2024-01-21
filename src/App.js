import { Routes, Route } from "react-router-dom";
import MenuBar from "./MenuBar";
import PokemonDetail from "./PokemonDetail";
import Home from "./Home";

function App() {
  return (
    <>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pkmn/:name" element={<PokemonDetail />} />
      </Routes>
    </>
  );
}

export default App;
