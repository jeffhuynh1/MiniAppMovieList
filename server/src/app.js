const express = require('express');
const app = express();
const cors = require('cors')
const port = 8081;
app.use(express.json());
app.use(cors());
const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (req, res) => {
        res.send('Application up and running.')
    })

app.get('/movies', (req, res) => {
    knex('movie_table')
    .select('*')
    .then(movie => {
        res.status(200).json(movie);
    })
})

app.listen(port, () => {
    console.log('Successful spooling up of server, nice');
})