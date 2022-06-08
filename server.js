var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs')

var data = require("./data.json")
// var tempData = data.postArray.reverse()

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).render('mainPage', {
        duckies: data.postArray
    })
})

app.post('/store', function(req, res, next){
  data.postArray.unshift({
    title: req.body.title,
    text: req.body.text,
    time: req.body.time,
    author: req.body.author,
    label: req.body.label,
    type:  req.body.type,
    replies: []
  })
  fs.writeFile("./data.json",
  JSON.stringify(data, null, 2),
  function(err){

  })
})

app.post('/storeReply', function(req, res, next){
  data.postArray[req.body.position].replies.push({
    replyText: req.body.replyText,
    replyAuthor: req.body.replyAuthor,
    replyTime: req.body.replyTime
  })
  fs.writeFile("./data.json",
  JSON.stringify(data, null, 2),
  function(err){

  })
})

// app.get('*', function (req, res) {
//   //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port)
});