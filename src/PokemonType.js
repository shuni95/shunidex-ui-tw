function PokemonType(props) {
    let classes;
    let text;
    
    switch (props.type) {
        case 'ghost':
            classes = 'bg-purple-900 text-white';
            text = 'fantasma';
            break;
        case 'normal':
            classes = 'bg-gray-500 text-white';
            text = 'normal';
            break;
        case 'dark':
            classes = 'bg-black text-white';
            text = 'siniestro';
            break;
    }

    return (
        <span className={classes + " p-1 px-3 rounded-3xl leading-6 lowercase text-sm font-['Open_Sans'] italic"}>{text}</span>
    )
}

export default PokemonType;