require('express-group-routes')
//instantiate express module
const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
//init cors
const cors = require('cors')
//use express in app variable
const app = express()
//define the server port
const port = process.env.PORT || 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//middlewares
const { authenticated } = require('./middleware')

//import controllers
const auth = require('./controllers/auth')
const company = require('./controllers/company')
const job = require('./controllers/job')
const talent = require('./controllers/talent')
const user = require('./controllers/user')

//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Alan Creative" to the API
    res.send('Hello Alan Creative!')
})

//use group route
app.group('/api/v1', (router) => {
     //auth route
     router.post('/register', auth.register)
     router.post('/login', auth.login)

     //user route
    router.get('/users', user.selectAll)
    router.get('/user/:id', user.selectByID)
    router.delete('/user/delete/:id', user.deleteAccount)
    router.put('/user/update/:id', user.updateAccount)

    //company route
    router.get('/companies', company.selectAll)
    router.get('/company/:id', company.selectByID)
    router.post('/company/add', company.addCompany)
    router.delete('/company/delete/:id', company.deleteByID)
    router.put('/company/update/:id', company.updateByID)
    
    //job route
    router.get('/jobs', job.selectAll)
    router.get('/job/:id', job.selectByID)
    router.post('/job/add', job.addJob)
    router.delete('/job/delete/:id', job.deleteByID)
    router.put('/job/update/:id', job.updateByID)

    //talent route
    router.get('/talents', talent.selectAll)
    router.get('/talent/:id', talent.selectByID)
    router.post('/talent/add', talent.addTalent)
    router.delete('/talent/delete/:id', talent.deleteByID)
    router.put('/talent/update/:id', talent.updateByID)
})

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port} !`))