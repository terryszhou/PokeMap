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
        res.render('map', {allplaces:allplaces})
    })
    .catch(err => {
        log(err)
    })
})

// GET /:ID - PLACE WITH POKEMON
app.get('/:id', (req, res) => {
    db.allplace.findOne({
        where: {id: req.params.id},
        include: [db.allpokemon]
    })
    .then((oneplace) => {
        const placeMons = oneplace.allpokemons.sort(function(a, b) {
            return a.dataValues.id - b.dataValues.id
        })
        res.render('route.ejs', {oneplace:oneplace, placeMons:placeMons})
    })
    .catch(err => {
        log(err)
    })
})

// GET /MOVE/:NAME - INFO ABOUT MOVE
app.get("/move/:name", (req, res) => {
    let name = req.params.name
    axios.get(`https://pokeapi.co/api/v2/move/${name}`)
    .then(resFromAPI => {
        let moveData = resFromAPI.data
        res.render("move.ejs", {moveData:moveData})
    })
    .catch(err => {
        log(err)
    })
})

// LISTEN TO PORT -------------------
app.listen(port, () => {
    log('...listening on', port );
});