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
          {name: 'seaking'},
          {name: 'psyduck'},
          {name: 'krabby'}
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
          {name: 'nidorino'}
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
          {name: 'poliwhirl'},
          {name: 'goldeen'},
          {name: 'slowpoke'},
          {name: 'krabby'},
          {name: 'kingler'},
          {name: 'horsea'}
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
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'shellder'},
          {name: 'horsea'},
          {name: 'tentacool'},
          {name: 'tentacruel'},
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
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'shellder'},
          {name: 'horsea'},
          {name: 'tentacool'},
          {name: 'tentacruel'},
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

async function route21() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 21'
      }
    })
    const route21Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'tangela'},
          {name: 'vileplume'},
          {name: 'victreebel'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'shellder'},
          {name: 'horsea'},
          {name: 'tentacool'},
          {name: 'tentacruel'},
          {name: 'staryu'},
          {name: 'starmie'}
        ]
      }
    })
    route21Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route22() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 22'
      }
    })
    const route22Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'spearow'},
          {name: 'nidoran-f'},
          {name: 'nidoran-m'},
          {name: 'mankey'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'poliwhirl'},
          {name: 'goldeen'}
        ]
      }
    })
    route22Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route23() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 23'
      }
    })
    const route23Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'spearow'},
          {name: 'fearow'},
          {name: 'ekans'},
          {name: 'arbok'},
          {name: 'sandshrew'},
          {name: 'sandslash'},
          {name: 'nidorina'},
          {name: 'nidoqueen'},
          {name: 'nidorino'},
          {name: 'nidoking'},
          {name: 'mankey'},
          {name: 'primeape'},
          {name: 'exeggutor'},
          {name: 'ditto'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'poliwhirl'},
          {name: 'goldeen'},
          {name: 'seaking'},
          {name: 'slowbro'},
          {name: 'kingler'},
          {name: 'seadra'},
          {name: 'dragonite'}
        ]
      }
    })
    route23Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route24() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 24'
      }
    })
    const route24Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'caterpie'},
          {name: 'metapod'},
          {name: 'weedle'},
          {name: 'kakuna'},
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'pidgeot'},
          {name: 'oddish'},
          {name: 'venonat'},
          {name: 'abra'},
          {name: 'bellsprout'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'seaking'},
          {name: 'psyduck'},
          {name: 'krabby'},
          {name: 'dragonite'},
          {name: 'charmander'}
        ]
      }
    })
    route24Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function route25() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'route 25'
      }
    })
    const route25Mons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'caterpie'},
          {name: 'metapod'},
          {name: 'weedle'},
          {name: 'kakuna'},
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'pidgeot'},
          {name: 'oddish'},
          {name: 'venonat'},
          {name: 'abra'},
          {name: 'bellsprout'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'psyduck'},
          {name: 'krabby'},
          {name: 'kingler'},
          {name: 'dragonite'}
        ]
      }
    })
    route25Mons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function palletTown() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'pallet town'
      }
    })
    const palletTownMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'bulbasaur'},
          {name: 'ivysaur'},
          {name: 'venusaur'},
          {name: 'charmander'},
          {name: 'charmeleon'},
          {name: 'charizard'},
          {name: 'squirtle'},
          {name: 'wartortle'},
          {name: 'blastoise'}
        ]
      }
    })
    palletTownMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function viridianCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'viridian city'
      }
    })
    const viridianCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'}
        ]
      }
    })
    viridianCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function pewterCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'pewter city'
      }
    })
    const pewterCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rapidash'}
        ]
      }
    })
    pewterCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function ceruleanCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'cerulean city'
      }
    })
    const ceruleanCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'seaking'},
          {name: 'psyduck'},
          {name: 'krabby'},
          {name: 'bulbasaur'},
          {name: 'jynx'},
          {name: 'gengar'}
        ]
      }
    })
    ceruleanCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function vermilionCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'vermilion city'
      }
    })
    const vermilionCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'squirtle'},
          {name: 'farfetchd'},
          {name: 'persian'},
          {name: 'arcanine'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'tentacool'},
          {name: 'shellder'},
          {name: 'krabby'},
          {name: 'horsea'},
          {name: 'staryu'}
        ]
      }
    })
    vermilionCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function lavenderTown() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'lavender town'
      }
    })
    const lavenderTownMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'gastly'},
          {name: 'haunter'},
          {name: 'cubone'}
        ]
      }
    })
    lavenderTownMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function celadonCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'celadon city'
      }
    })
    const celadonCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'porygon'},
          {name: 'clefable'},
          {name: 'eevee'},
          {name: 'vaporeon'},
          {name: 'jolteon'},
          {name: 'flareon'},
          {name: 'poliwag'},
          {name: 'poliwhirl'},
          {name: 'goldeen'},
          {name: 'slowpoke'}
        ]
      }
    })
    celadonCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function fuchsiaCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'fuchsia city'
      }
    })
    const fuchsiaCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'seaking'},
          {name: 'krabby'},
          {name: 'gyarados'},
          {name: 'nidoran-f'},
          {name: 'nidorina'},
          {name: 'nidoran-m'},
          {name: 'nidorino'},
          {name: 'paras'},
          {name: 'parasect'},
          {name: 'venonat'},
          {name: 'venomoth'},
          {name: 'exeggcute'},
          {name: 'cubone'},
          {name: 'marowak'},
          {name: 'rhyhorn'},
          {name: 'chansey'},
          {name: 'kangaskhan'},
          {name: 'tangela'},
          {name: 'scyther'},
          {name: 'pinsir'},
          {name: 'tauros'},
          {name: 'slowpoke'},
          {name: 'psyduck'},
          {name: 'dratini'},
          {name: 'dragonair'}
        ]
      }
    })
    fuchsiaCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function saffronCity() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'saffron city'
      }
    })
    const saffronCityMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'lapras'},
          {name: 'hitmonlee'},
          {name: 'hitmonchan'}
        ]
      }
    })
    saffronCityMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function cinnabarIsland() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'cinnabar island'
      }
    })
    const cinnabarIslandMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'rattata'},
          {name: 'raticate'},
          {name: 'vulpix'},
          {name: 'growlithe'},
          {name: 'ponyta'},
          {name: 'grimer'},
          {name: 'muk'},
          {name: 'koffing'},
          {name: 'weezing'},
          {name: 'magmar'},
          {name: 'ditto'},
          {name: 'omanyte'},
          {name: 'omastar'},
          {name: 'kabuto'},
          {name: 'kabutops'},
          {name: 'aerodactyl'},
          {name: 'seel'},
          {name: 'electrode'},
          {name: 'tangela'},
          {name: 'dewgong'},
          {name: 'rhydon'},
          {name: 'golem'}
        ]
      }
    })
    cinnabarIslandMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function ceruleanCave() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'cerulean cave'
      }
    })
    const ceruleanCaveMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'arbok'},
          {name: 'raichu'},
          {name: 'sandslash'},
          {name: 'wigglytuff'},
          {name: 'golbat'},
          {name: 'gloom'},
          {name: 'parasect'},
          {name: 'venomoth'},
          {name: 'kadabra'},
          {name: 'alakazam'},
          {name: 'weepinbell'},
          {name: 'graveler'},
          {name: 'magneton'},
          {name: 'dodrio'},
          {name: 'electrode'},
          {name: 'marowak'},
          {name: 'lickitung'},
          {name: 'rhyhorn'},
          {name: 'rhydon'},
          {name: 'chansey'},
          {name: 'hypno'},
          {name: 'rapidash'},
          {name: 'ditto'},
          {name: 'magikarp'},
          {name: 'poliwag'},
          {name: 'goldeen'},
          {name: 'seaking'},
          {name: 'slowbro'},
          {name: 'kingler'},
          {name: 'seadra'},
          {name: 'poliwrath'},
          {name: 'golduck'},
          {name: 'mewtwo'}
        ]
      }
    })
    ceruleanCaveMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function mtMoon() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'mt moon'
      }
    })
    const mtMoonMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'sandshrew'},
          {name: 'sandslash'},
          {name: 'clefairy'},
          {name: 'clefable'},
          {name: 'zubat'},
          {name: 'paras'},
          {name: 'geodude'}
        ]
      }
    })
    mtMoonMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function powerPlant() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'power plant'
      }
    })
    const powerPlantMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'pikachu'},
          {name: 'raichu'},
          {name: 'magnemite'},
          {name: 'magneton'},
          {name: 'grimer'},
          {name: 'muk'},
          {name: 'voltorb'},
          {name: 'electrode'},
          {name: 'electabuzz'},
          {name: 'zapdos'}
        ]
      }
    })
    powerPlantMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function rockTunnel() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'rock tunnel'
      }
    })
    const rockTunnelMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'zubat'},
          {name: 'geodude'},
          {name: 'machop'},
          {name: 'onix'}
        ]
      }
    })
    rockTunnelMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function victoryRoad() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'victory road'
      }
    })
    const victoryRoadMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'zubat'},
          {name: 'golbat'},
          {name: 'venomoth'},
          {name: 'machop'},
          {name: 'machoke'},
          {name: 'geodude'},
          {name: 'graveler'},
          {name: 'onix'},
          {name: 'marowak'},
          {name: 'moltres'}
        ]
      }
    })
    victoryRoadMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function viridianForest() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'viridian forest'
      }
    })
    const viridianForestMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'caterpie'},
          {name: 'metapod'},
          {name: 'butterfree'},
          {name: 'weedle'},
          {name: 'kakuna'},
          {name: 'beedrill'},
          {name: 'pidgey'},
          {name: 'pidgeotto'},
          {name: 'pidgeot'},
          {name: 'pikachu'}
        ]
      }
    })
    viridianForestMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function seafoamIslands() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'seafoam islands'
      }
    })
    const seafoamIslandsMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'zubat'},
          {name: 'golbat'},
          {name: 'magikarp'},
          {name: 'psyduck'},
          {name: 'golduck'},
          {name: 'slowpoke'},
          {name: 'slowbro'},
          {name: 'seel'},
          {name: 'dewgong'},
          {name: 'shellder'},
          {name: 'cloyster'},
          {name: 'krabby'},
          {name: 'kingler'},
          {name: 'horsea'},
          {name: 'seadra'},
          {name: 'tentacool'},
          {name: 'staryu'},
          {name: 'articuno'}
        ]
      }
    })
    seafoamIslandsMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

async function specialEvent() {
  try {
    const [allplace, allPlaceCreated] = await db.allplace.findOrCreate({
      where: {
        name: 'special event'
      }
    })
    const specialEventMons = await db.allpokemon.findAll({
      where: {
        [Op.or]:[
          {name: 'mew'}
        ]
      }
    })
    specialEventMons.forEach(pokemon => {
      allplace.addAllpokemon(pokemon)
    })
  } catch(err) {
    log(err)
  }
}

route1()
route2()
route3()
route4()
route5()
route6()
route7()
route8()
route9()
route10()
route11()
route12()
route13()
route14()
route15()
route16()
route17()
route18()
route19()
route20()
route21()
route22()
route23()
route24()
route25()
palletTown()
viridianCity()
pewterCity()
ceruleanCity()
vermilionCity()
lavenderTown()
celadonCity()
fuchsiaCity()
saffronCity()
cinnabarIsland()
ceruleanCave()
mtMoon()
powerPlant()
rockTunnel()
victoryRoad()
viridianForest()
seafoamIslands()
specialEvent()




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