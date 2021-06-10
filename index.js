const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public/'))
app.use(methodOverride("_method"))
app.use(ejsLayouts);
app.use('/pokemon', require('./routes/pokemon'));

// GET / - main index of site
// app.get('/', (req, res) => {
//   let pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
//   axios.get(pokemonUrl).then(apiResponse => {
//     let pokemon = apiResponse.data.results;
//     res.render('index', { pokemon: pokemon.slice(0, 151) });
//   })
// });

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

// GET /ROUTE - VIEW ROUTE
// app.get('/:id', (req, res) => {
//   let name = req.params.id
//   res.render('route.ejs')
// })

// TEST ROUTE
// app.get('/', (req, res) => {
//   let testUrl = 'https://pokeapi.co/api/v2/location-area/296/'
//   axios.get(testUrl).then(apiResponse => {
//     let results = apiResponse.data
//     console.log(results.pokemon_encounters.length)
//   })
// })


app.listen(port, () => {
  console.log('...listening on', port );
});