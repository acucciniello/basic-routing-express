const express = require('express')
const app = express()
var port = 3000

/*
app.get('/', function (req, res) {
  res.send('This is our home page!')
})

app.post('/', function (req, res) {
  res.send('we got a POST req from the client')
})
*/

app.route('/')
  .get(function (req, res) {
    res.send('This is our home page!')
  })
  .post(function (req, res) {
    res.send('we got a POST req from the client')
  })

app.get('/about', function (req, res) {
  res.send('This is a basic app with routing in express')
})

app.listen(port, function () {
  console.log('We are listening on port ' + port)
})
