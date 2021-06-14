// MODULE SETUP -------------------
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const db = require('./models');
const app = express();

// MIDDLEWARE -------------------
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'))
app.use(methodOverride("_method"))
app.use(ejsLayouts);
app.use('/pokemon', require('./routes/pokemon'));

// OPT. VARIABLES -------------------
const log = console.log
const port = process.env.PORT || 3000;

// ROUTES -------------------
// GET / - MAIN MAP
app.get('/', (req, res) => {
  db.allplace.findAll()
  .then((allplaces) => {
    res.render('map', {allplaces: allplaces})
  })
  .catch(err => {
    log(err)
  })
})

// GET / - PLACE WITH POKEMON
app.get('/:id', (req, res) => {
  db.allplace.findOne({
    where: { id: req.params.id },
    include: [db.allpokemon]
  })
  .then((oneplace) => {
    const placeMons = oneplace.allpokemons.sort(function(a, b) {
      return a.dataValues.id - b.dataValues.id
    })
    res.render('route.ejs', {oneplace: oneplace, placeMons: placeMons})
  })
  .catch(err => {
    log(err)
  })
})

// LISTEN TO PORT -------------------
app.listen(port, () => {
  log('...listening on', port );
});

// SCRAP CODE -------------------
// GET / - show main pokedex
// app.get('/', (req, res) => {
//   let pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
//   axios.get(pokemonUrl).then(apiResponse => {
//     let pokemon = apiResponse.data.results;
//     res.render('index', { pokemon: pokemon.slice(0, 151) });
//   })
// });

// GET /ROUTE - VIEW ROUTE
// app.get('/:id', (req, res) => {
//   db.allplace.findOne({
//     where: { id: req.params.id }
//   })
//   .then((oneplace) => {
//     res.render('route.ejs', {oneplace: oneplace})
//   })
//   .catch(err => {
//     log(err)
//   })
// })

