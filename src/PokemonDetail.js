import { useParams } from "react-router-dom";
import { useState } from 'react';

function PokemonDetail() {
    const params = useParams();
    const [effect, setEffect] = useState(false);

    const evolutionButtonHandler = (e) => {
        e.preventDefault();
        // Fire animation
        setEffect(true);
        console.info("xd");
    }

    const animationEndsHandler = (e) => {
        setEffect(false);

        document.getElementById('image').src = '/sprites/Zoroark.png';
    }


    return (
        <section className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-row w-1/3 pl-4 py-1 items-center">
                    <p className="text-sm">«Es un alma difunta resucitada en Hisui que transforma su rencor en energía. Esta surge de su cabeza y adopta la forma de su oponente, disipando asi su inquina.»</p>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex justify-center">
                        <h1 className="text-3xl">{ params.name }</h1>
                    </div>
                    <div className="flex relative items-end mt-2">
                        <img id="image" className={effect ? 'animate-evolution' : ''} src="/sprites/Zorua.png" alt="Zorua" onAnimationEnd={animationEndsHandler}/>
                        <img className="hidden" src="/sprites/Zoroark.png" alt="Zoroark"/>
                        <button className="bg-red-500 bg-opacity-75 rounded-lg p-1 relative right-16 bottom-10 w-[50px] shrink-0 text-sm" onClick={evolutionButtonHandler}>Lvl 30</button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <span className="p-1 px-3 rounded-3xl leading-6 bg-gray-500 text-white uppercase text-sm font-sem">Normal</span><span className="p-1 px-3 rounded-3xl bg-purple-900 text-white uppercase text-sm leading-6">Fantasma</span>
                    </div>
                    <div className="flex justify-center mb-2">
                        <span className="text-sm italic">Pokémon Zorro Rencor</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h2>Objetos:</h2>
                    <ul className="list-disc list-item">
                        <li>Baya Lupu</li>
                        <li>Bonguri Pocho</li>
                    </ul>
                    <h2>Alimentos preferidos</h2>
                    <ul>
                        <li>sss</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PokemonDetail;
