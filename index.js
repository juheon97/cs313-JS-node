process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require('express')
const calculateRate = require("./calculateRate.js")
const db = require("./callDB.js")

const app = express()

app.set('port', process.env.PORT || 5000)
   .use(express.static(__dirname + '/public'))
   .set('views', __dirname + '/views')
   .set('view engine', 'ejs')
   .get('/', function(req, res){
      res.sendFile('form.html', { root: __dirname + "/public"});
   })
   .get('/home', function(req, res){
      res.sendFile('page.html', { root: __dirname + "/public"});
   })
   .get('/sheet', function(req, res){
      res.sendFile('sheet.html', { root: __dirname + "/public"});
   })
   .get('/community', function(req, res){
      res.sendFile('community.html', { root: __dirname + "/public"});
   })
   .get('/getRate', calculateRate.convertRate)

   .listen(app.get('port'), function() {
      console.log('Listening on port: ' + app.get('port'));
   })






