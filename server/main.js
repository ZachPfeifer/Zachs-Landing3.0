import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from "./db/dbconfig"
const server = express()

//Fire up database connection
DbContext.connect()

//Sets the port to Heroku's, and the files to the built project 
var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))


var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//REGISTER MIDDLEWEAR


//REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN




//YOUR ROUTES HERE!!!!!!
import MessageController from './controllers/MessageController'

server.use('/api/messages', new MessageController().router)




//Default Error Handler
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})