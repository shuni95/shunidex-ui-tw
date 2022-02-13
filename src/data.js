export const PokedexData = {
    'zorua': {
        'name': 'Zorua',
        'title': 'Pokémon Zorro Rencor',
        'imageSrc': '/sprites/Zorua.png',
        'description': 'Es un alma difunta resucitada en Hisui que transforma su rencor en energía. Esta surge de su cabeza y adopta la forma de su oponente, disipando asi su inquina.',
        'evolutions': [
            {
                'text': 'Lvl 30',
                'evolution': 'Zoroark'
            }
        ],
        'types': [
            'normal',
            'ghost'
        ],
        'items': [
            'Baya Lupu',
            'Bonguri Pocho'
        ],
        'meals': [
            ''
        ],
        'locations': [
            {
                'section': 'Tundra Alba',
                'zones': ['Páramo Algente']
            }
        ]
    },
    'zoroark': {
        'name': 'Zoroark',
        'title': 'Zorro []',
        'description': 'Pendiente',
        'imageSrc': '/sprites/Zoroark.png',
        'evolutions': [],
        'types': [
            'normal',
            'ghost'
        ],
        'preEvolution': 'zorua',
    }
}