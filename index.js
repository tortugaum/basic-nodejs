 const { Console } = require('console')
const express = require('express')
 const path = require('path')

 const app = express()

 const router = express.Router()

 router.get('/', function(req,res){
     res.sendFile(path.join(__dirname + '/index.html'))

 })

 router.get('/about', function(req,res){
     res.sendFile(path.join(__dirname + '/about.html'))

 })

app.use('/', router)
app.listen(process.env.port || 3000)

console.log("Spinning.....");