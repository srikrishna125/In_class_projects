const express = require('express')

const quoteCards = require('./game/quoteCards')


const app = express()
const port = 3000

app
    .get('/', (req, res) => res.send('krishna srikanth donthineni'))
    .get('/game/quoteCards', (req, res) => res.send('quoteCards'))

app.listen(port, () => console.log(`listening at http://localhost:${port}`))