const db = require('./models');

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

db.allplace.create({
  name: 'seafoam islands'
}).then(place => {
  console.log(`Created: ${place.name}`)
})

db.allplace.create({
  name: 'special event'
}).then(place => {
  console.log(`Created: ${place.name}`)
})