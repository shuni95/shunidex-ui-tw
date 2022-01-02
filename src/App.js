import { FrequentSearch } from "./FrequentSearch";

function App() {

  return (
    <div>
      <div className="flex justify-center">
        <img className="h-[100px] w-[100px]" src="./pokeball.png" alt="Pokeball"/>
      </div>
      <h1 className="text-4xl text-emerald-700 text-center font-semibold">Shunidex</h1>
      
      <div className="flex justify-center mt-2">
          <input className="w-40 placeholder:italic placeholder:text-gray-400 bg-white border-2 rounded border-solid border-emerald-800 p-2 focus:border-emerald-400 focus:ring-emerald-600 focus:ring-1 focus:outline-none" 
            type="text" placeholder="ex. Pikachu"/>
      </div>
      <div className="flex flex-col mt-4">
        <FrequentSearch title="Favorites"/>
        <FrequentSearch title="Most wanted"/>
        <FrequentSearch title="Meta 2v2"/>
        <FrequentSearch title="Cutest"/>
        <FrequentSearch title="Last Gen"/>
      </div>
    </div>
  );
}

export default App;
