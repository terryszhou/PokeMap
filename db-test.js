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

async function route2() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 2'
      }
    })
    const route2Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'rattata'},
          {name: 'caterpie'},
          {name: 'weedle'},
          {name: 'nidoran-f'},
          {name: 'nidoran-m'},
          {name: 'mr-mime'},
          {name: 'diglett'},
          {name: 'dugtrio'}
        ]
      }
    })
    route2Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route3() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 3'
      }
    })
    const route3Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'rattata'},
          {name: 'spearow'},
          {name: 'sandshrew'},
          {name: 'jigglypuff'},
          {name: 'mankey'}
        ]
      }
    })
    route3Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route4() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 4'
      }
    })
    const route4Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'spearow'},
          {name: 'ekans'},
          {name: 'sandshrew'},
          {name: 'mankey'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'psyduck'},
          {name: 'krabby'},
          {name: 'seaking'}
        ]
      }
    })
    route4Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route5() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 5'
      }
    })
    const route5Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'jigglypuff'},
          {name: 'oddish'},
          {name: 'meowth'},
          {name: 'mankey'},
          {name: 'abra'},
          {name: 'bellsprout'},
          {name: 'machamp'}
        ]
      }
    })
    route5Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route6() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 6'
      }
    })
    const route6Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'jigglypuff'},
          {name: 'oddish'},
          {name: 'meowth'},
          {name: 'mankey'},
          {name: 'abra'},
          {name: 'bellsprout'},
          {name: 'psyduck'},
          {name: 'golduck'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'shellder'},
          {name: 'krabby'},
          {name: 'machamp'}

        ]
      }
    })
    route6Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route7() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 7'
      }
    })
    const route7Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'vulpix'},
          {name: 'ninetales'},
          {name: 'jigglypuff'},
          {name: 'oddish'},
          {name: 'meowth'},
          {name: 'mankey'},
          {name: 'growlithe'},
          {name: 'arcanine'},
          {name: 'abra'},
          {name: 'bellsprout'}
        ]
      }
    })
    route7Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route8() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 8'
      }
    })
    const route8Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'vulpix'},
          {name: 'ninetales'},
          {name: 'jigglypuff'},
          {name: 'oddish'},
          {name: 'meowth'},
          {name: 'mankey'},
          {name: 'growlithe'},
          {name: 'arcanine'},
          {name: 'abra'},
          {name: 'kadabra'}
        ]
      }
    })
    route8Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route9() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 9'
      }
    })
    const route9Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'fearow'},
          {name: 'ekans'},
          {name: 'sandshrew'},
          {name: 'nidoran-f'},
          {name: 'nidorina'},
          {name: 'nidoran-m'},
          {name: 'nidorino'},
        ]
      }
    })
    route9Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route10() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 10'
      }
    })
    const route10Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'ekans'},
          {name: 'sandshrew'},
          {name: 'nidoran-f'},
          {name: 'nidoran-m'},
          {name: 'machop'},
          {name: 'magnemite'},
          {name: 'voltorb'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'poliwhirl'},
          {name: 'slowpoke'},
          {name: 'krabby'},
          {name: 'kingler'},
          {name: 'horsea'},
        ]
      }
    })
    route10Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route11() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 11'
      }
    })
    const route11Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'ekans'},
          {name: 'sandshrew'},
          {name: 'drowzee'},
          {name: 'diglett'},
          {name: 'dugtrio'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'shellder'},
          {name: 'krabby'},
          {name: 'horsea'}
        ]
      }
    })
    route11Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route12() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 12'
      }
    })
    const route12Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'oddish'},
          {name: 'gloom'},
          {name: 'venonat'},
          {name: 'bellsprout'},
          {name: 'weepinbell'},
          {name: 'farfetchd'},
          {name: 'snorlax'},
          {name: 'slowpoke'},
          {name: 'slowbro'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'krabby'},
          {name: 'horsea'},
          {name: 'seadra'}
        ]
      }
    })
    route12Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route13() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 13'
      }
    })
    const route13Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'oddish'},
          {name: 'gloom'},
          {name: 'venonat'},
          {name: 'bellsprout'},
          {name: 'weepinbell'},
          {name: 'farfetchd'},
          {name: 'ditto'},
          {name: 'slowpoke'},
          {name: 'slowbro'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'krabby'},
          {name: 'horsea'},
          {name: 'seadra'}
        ]
      }
    })
    route13Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route14() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 14'
      }
    })
    const route14Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'oddish'},
          {name: 'gloom'},
          {name: 'venonat'},
          {name: 'venomoth'},
          {name: 'bellsprout'},
          {name: 'weepinbell'},
          {name: 'ditto'}
        ]
      }
    })
    route14Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route15() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 15'
      }
    })
    const route15Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'oddish'},
          {name: 'gloom'},
          {name: 'venonat'},
          {name: 'venomoth'},
          {name: 'bellsprout'},
          {name: 'weepinbell'},
          {name: 'ditto'}
        ]
      }
    })
    route15Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route16() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 16'
      }
    })
    const route16Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'fearow'},
          {name: 'doduo'},
          {name: 'snorlax'}
        ]
      }
    })
    route16Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route17() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 17'
      }
    })
    const route17Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'fearow'},
          {name: 'ponyta'},
          {name: 'doduo'},
          {name: 'dodrio'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'shellder'},
          {name: 'krabby'}
        ]
      }
    })
    route17Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route18() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 18'
      }
    })
    const route18Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'spearow'},
          {name: 'fearow'},
          {name: 'doduo'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'shellder'},
          {name: 'krabby'},
          {name: 'starmie'},
          {name: 'lickitung'},
          {name: 'parasect'}
        ]
      }
    })
    route18Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route19() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 19'
      }
    })
    const route19Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'tentacool'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacruel'},
          {name: 'shellder'},
          {name: 'horsea'},
          {name: 'staryu'},
          {name: 'starmie'}
        ]
      }
    })
    route19Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route20() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 20'
      }
    })
    const route20Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'tentacool'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacruel'},
          {name: 'shellder'},
          {name: 'horsea'},
          {name: 'staryu'}
        ]
      }
    })
    route20Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}




// route1()
// route2()
// route3()
// route4()
// route5()
// route6()
// route7()
// route8()
// route9()
// route10()
// route11()
// route12()
// route13()
// route14()
// route15()
// route16()
// route17()
// route18()
// route19()
// route20()






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