// MODULE SETUP ------------------------------------
const axios = require('axios')
const express = require('express')
const router = express.Router()
const db = require('../models')
const app = express()
const log = console.log

// ROUTES ---------------------------------------

// GET /pokemon - return a page with favorited Pokemon
router.get('/', (req, res) => {
  db.pokemon.findAll()
  .then((mons) => {
    const pokemons = mons.sort(function (a, b) {
      return a.dataValues.createdAt - b.dataValues.createdAt
    })
    res.render('pokemon/index.ejs', { pokemons: pokemons})
  })
  .catch(err => {
    log(err)
  })
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  db.pokemon.count().then(c => {
    if (c < 6) {
      db.pokemon.create({
        name: req.body.name,
        dexnum: parseInt(req.body.dexnum)
      })
    } 
  })
  .then((post) => {
    res.redirect('/pokemon')
  })
  .catch((err) => {
    log(err)
  })
});

// GET /pokemon/edit/:id -- show form to nickname party pokemon
router.get("/edit/:id", (req, res) => {
  db.pokemon.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((onepokemon) => {
    res.render("pokemon/nickname.ejs", {onepokemon: onepokemon})
  })
  .catch(err => {
    log(err)
  })
})

// PUT /pokemon/:id -- update party pokemon nickname
router.put("/:id", (req, res) => {
  db.pokemon.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((onepokemon) => {
    onepokemon.update({
      nickname: req.body.nickname
    })
    res.redirect('/pokemon')
  })
  .catch(err => {
    log(err)
  })
})

// DELETE /pokemon - delete pokemon from favorites page
router.delete('/', (req, res) => {
  db.pokemon.destroy({
    where: {
      id: req.body.id
    }
  })
  .then((post) => {
    res.redirect('/pokemon')
  })
  .catch(err => {
    log(err)
  })
})

// GET /pokemon/:name - renders a show.ejs page with info about pokemon
router.get('/:name', async (req, res) => {
  try {
    let name = req.params.name
    let one = `https://pokeapi.co/api/v2/pokemon/${name}`
    let two = `https://pokeapi.co/api/v2/pokemon-species/${name}`
    const responseOne = await axios.get(one)
    const responseTwo = await axios.get(two)
    let pokeDataOne = responseOne.data
    let pokeDataTwo = responseTwo.data

    let sortedMoves = pokeDataOne.moves.sort((a, b) => {
      return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at
    })

    let moveData = []
    for await (e of sortedMoves) {
      moveData.push(await axios.get(e.move.url))
    }
    moveData.forEach(move => {
      log(move.data.name)
    })

    // log(moveData)

    res.render('pokemon/show.ejs', {pokeDataOne:pokeDataOne, pokeDataTwo:pokeDataTwo, sortedMoves:sortedMoves})

  } catch(err) {
    log(err)
  }
})


// EXPORT ROUTER
module.exports = router;

// SCRAP CODE

// ATTEMPTED LAYERED API CALL - RETURNS 'TypeError: [] is not a function'
// const moveData = []

// (async function() {
//   try {
//     for await (e of sortedMoves) {
//       moveData.push(axios.get(e.move.url))
//     }
//   } catch (err) {
//     log(err)
//   }
// })();

// log(moveData)

// ATTEMPTED LAYERED MOVE API CALL -- RETURNS ARRAY OF UNDEFINED
// const moveData = await sortedMoves.map(e => {
//   axios.get(e.move.url)
// })

// ATTEMPTED LAYERED MOVE API CALL -- RETURNS PENDING PROMISES
// let moveData = []

// for await(e of sortedMoves) {
//   moveData.push(axios.get(e.move.url))
// }
// log(moveData)

// ATTEMPTED LAYERED MOVE API CALL - RETURNS ARRAY OF UNDEFINED
// let moveData = sortedMoves.map(e => {
//   axios.get(e.move.url)
//   .then(moves => {
//     return moves.data
//   })
//   .catch(err => {
//     log(err)
//   })
// })

// .THEN FORMAT FOR GET/SHOW ROUTE - FUNCTIONAL, BUT OVERLY COMPLICATED
// router.get('/:name', (req, res) => {
//   let name = req.params.name

//   let one = `https://pokeapi.co/api/v2/pokemon/${name}`
//   let two = `https://pokeapi.co/api/v2/pokemon-species/${name}`

//   const requestOne = axios.get(one)
//   const requestTwo = axios.get(two)

//   axios.all([requestOne, requestTwo])
//   .then(axios.spread((...responses) => {

//     const responseOne = responses[0]
//     const responseTwo = responses[1]

//     let pokeDataOne = responseOne.data
//     let pokeDataTwo = responseTwo.data

//     let sortedMoves = pokeDataOne.moves.sort((a, b) => {
//       return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at
//     })

//     res.render('pokemon/show.ejs', {pokeDataOne:pokeDataOne, pokeDataTwo:pokeDataTwo, sortedMoves:sortedMoves})
//     })
//   )
//   .catch(err => {
//     log(err)
//   })
// })

