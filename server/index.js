const express = require('express');
const gameController = require('./controllers/game');


const app = express();
const port = 3000;


app
    .use(express.json())
    .use(express.urlencoded({extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('This class is awesome!') )
    .use('/game',gameController)

    .use((req,res) => {
        const homePath =path.join( __dirname,'/../client/dist/index.html');
        console.log()
    })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));