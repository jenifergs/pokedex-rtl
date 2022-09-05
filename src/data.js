const pokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://pwo-wiki.info/images/5/5b/Pp.gif',
      },
    ],
    summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://pwo-wiki.info/images/5/5b/Pp.gif',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://pwo-wiki.info/images/f/f4/Route_3.gif',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://pwo-wiki.info/images/7/7d/Route_4.gif',
      },
      {
        location: 'Kanto Rock Tunnel',
        map: 'https://pwo-wiki.info/images/1/1d/Rocktunnel.gif',
      },
    ],
    summary: 'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.',
  },
  {
    id: 10,
    name: 'Caterpie',
    type: 'Bug',
    averageWeight: {
      value: '2.9',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 30',
        map: 'https://pwo-wiki.info/images/7/76/Route_30.gif ',
      },
      {
        location: 'Johto Route 31',
        map: 'https://pwo-wiki.info/images/f/f1/Route_31.gif',
      },
      {
        location: 'Ilex Forest',
        map: 'https://pwo-wiki.info/images/f/f1/Route_31.gif',
      },
      {
        location: 'Johto National Park',
        map: 'https://pwo-wiki.info/images/d/d2/R35.gif',
      },
    ],
    summary: 'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.',
  },
  {
    id: 23,
    name: 'Ekans',
    type: 'Poison',
    averageWeight: {
      value: '6.9',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Goldenrod Game Corner',
        map: 'https://pwo-wiki.info/images/4/47/Goldenrod_City.gif',
      },
    ],
    summary: 'It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however.',
  },
  {
    id: 65,
    name: 'Alakazam',
    type: 'Psychic',
    averageWeight: {
      value: '48.0',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Unova Accumula Town',
        map: 'https://pwo-wiki.info/images/3/3e/Cer.gif',
      },
    ],
    summary: 'Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes.',
  },
  {
    id: 151,
    name: 'Mew',
    type: 'Psychic',
    averageWeight: {
      value: '4.0',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Faraway Island',
        map: 'https://pwo-wiki.info/images/0/07/Route_20.gif',
      },
    ],
    summary: 'Apparently, it appears only to those people who are pure of heart and have a strong desire to see it.',
  },
  {
    id: 78,
    name: 'Rapidash',
    type: 'Fire',
    averageWeight: {
      value: '95.0',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Route 28',
        map: 'https://pwo-wiki.info/images/b/bf/Route_29.gif',
      },
      {
        location: 'Johto Mount Silver',
        map: 'https://pwo-wiki.info/images/5/58/R37.gif',
      },
    ],
    summary: 'At full gallop, its four hooves barely touch the ground because it moves so incredibly fast.',
  },
  {
    id: 143,
    name: 'Snorlax',
    type: 'Normal',
    averageWeight: {
      value: '460.0',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Vermillion City',
        map: 'https://pwo-wiki.info/images/8/86/Vermilion_City.gif',
      },
    ],
    summary: 'What sounds like its cry may actually be its snores or the rumblings of its hungry belly.',
  },
  {
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 45',
        map: 'https://pwo-wiki.info/images/4/49/R45.gif',
      },
      {
        location: 'Johto Dragon\'s Den',
        map: 'https://pwo-wiki.info/images/1/13/R42.gif',
      },
    ],
    summary: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
  },
];

export default pokemons;
