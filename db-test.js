// const { placeholder } = require('sequelize/types/lib/operators');
const db = require('./models');
const { Op } = require('sequelize')
const log = console.log

async function route1() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 1'
      }
    })
    const route1Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'rattata'},
          {name: 'pikachu'}
        ]
      }
    })
    route1Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

route1()

// db.allplace.findOrCreate({
//   where: {
//     name: 'route 1'
//   }
// })
// .then((allplace, allPlaceCreated) => {
//   db.allpokemon.findOrCreate({
//     where: {
//       name: 'pidgey'
//     },
//     where: {
//       name: 'rattata'
//     },
//     where: {
//       name: 'pikachu'
//     }
//   })
//   .then((allPokemon, allPokemonCreated) => {
//     allPlace.addAllPokemon(allPokemon)
//   })
// })

// db.pokemon.create({
//     name: 'pikachu'
//   }).then(poke => {
//     console.log('Created: ', poke.name)
//   })

// db.pokemon.findOne({
//   where: {
//     name: 'pikachu'
//   }
// }).then(poke => {
//   console.log('Found: ', poke.name)
// })

// db.allplace.create({
//   name: 'seafoam islands'
// }).then(place => {
//   console.log(`Created: ${place.name}`)
// })

// db.allplace.create({
//   name: 'special event'
// }).then(place => {
//   console.log(`Created: ${place.name}`)
// })