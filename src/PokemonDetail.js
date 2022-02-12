import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { PokedexData } from './data';
import PokemonType from "./PokemonType";

function PokemonDetail() {
    const params = useParams();
    const [effect, setEffect] = useState('');
    const [pkmn, setPkmn] = useState({});

    useEffect(() => {
        console.info(params.name);
        // TODO: Add component for pokemon type
        // TODO: Add component for Pokemon to manage evolution
        // TODO: Update pokemon data after evolution

        setPkmn(PokedexData[params.name]);
    }, [])

    const evolutionButtonHandler = (e) => {
        e.preventDefault();
        setEffect('animate-evolution');
    }

    const animationEndsHandler = (e) => {
        setEffect('animate-appear');

        document.getElementById('image').src = '/sprites/Zoroark.png';
    }


    return (
        <section className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-bold">{ params.name }</h1>
                    </div>
                    <div className="flex relative justify-center items-end mt-2">
                        <img id="image" className={effect} src="/sprites/Zorua.png" alt="Zorua" onAnimationEnd={animationEndsHandler}/>
                        <div className="flex flex-col space-y-2">
                        <button className="bg-red-500 text-white bg-opacity-75 rounded-lg p-1 relative right-16 bottom-10 w-[50px] shrink-0 text-sm italic" onClick={evolutionButtonHandler}>Lvl 30</button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <PokemonType type="normal"/>
                        <PokemonType type="ghost"/>
                    </div>
                    <div className="flex justify-center mb-2">
                        <span className="text-sm italic">{ pkmn.title }</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2 pl-4 items-center mb-6">
                <div style={{filter: 'url(/filter.svg#waves)'}} className='shadow-papyrus absolute h-20 left-[5px] right-[10px] bg-[#faebd7]'></div>
                <p className="text-xs z-10 font-[Merienda]">«{pkmn.description}»</p>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col pl-4 basis-1/2">
                    <h2 className="font-semibold mb-2">Fuerte (x2)</h2>
                    <ul className="list-none">
                        <li><PokemonType type="ghost"/></li>
                    </ul>
                </div>
                <div className="flex flex-col basis-1/2">
                    <h2 className="font-semibold mb-2">Débil (x2)</h2>
                    <ul className="list-none space-y-2">
                        <li><PokemonType type="ghost"/></li>
                        <li><PokemonType type='dark'/></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <div className="flex flex-col pl-4 basis-1/2">
                    <h2 className="font-semibold">Objetos:</h2>
                    <ul className="list-none">
                        {pkmn.items ? pkmn.items.map(item => (
                            <li className="text-sm">{item}</li>
                        )) : ''}
                    </ul>
                </div>
                <div className="flex flex-col basis-1/2">
                    <h2 className="font-semibold">Alimentos preferidos</h2>
                    <ul className="list-none">
                        <li className="text-sm">sss</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PokemonDetail;
