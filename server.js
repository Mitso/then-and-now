const express  = require('express')
const bodyParser = require("body-parser")
const router = express.Router()

const port = 8000
const app = express()

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/user', (req, res) => {
    console.log(req.body)
})

app.get('/entries', (req, res) => {
   res.send('Welcome to server')
})

app.listen(port, () => {
    console.log(`Server:  http://localhost:${port} \t ----------`)
})