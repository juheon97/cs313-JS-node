process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const {Pool} = require('pg');
const DATABASE_URL = 'postgres://uubbjvfgoqyruq:2e8107d076c68abe18c4af2adcaa7bae5ffe365801c7faa45ef67dadbe10a21c@ec2-174-129-203-86.compute-1.amazonaws.com:5432/d9gpeunfu4tkme?ssl=true'
const express = require('express')
const calculateRate = require("./calculateRate.js")
const app = express()
const pool = Pool({connectionString: DATABASE_URL})


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






