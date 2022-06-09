var path = require('path')
var handlebars = require('handlebars')
var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs')

var data = require("./data.json")

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

handlebars.registerHelper("invert", (value, options) => {
  return (data.postArray.length - parseInt(value))
})

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).render('mainPage', {
      duckies: data.postArray
  })
})

app.get('/posts/:num', (req, res, next) => {
  let num = (data.postArray.length - req.params.num)
  if (num < 0 || num >= data.postArray.length) {
    next()
  } else {
    console.log(data.postArray[num].replies)
    res.status(200).render('duckyPage', {
      duckydata: data.postArray[num],
      replies: data.postArray[num].replies
    })
  }
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
    if (!err) {
      res.status(200).send()
    } else {
      res.status(500).send("Error: error saving the ducky.")
    }
  })
})

app.post('/storeReply', function(req, res, next){
  data.postArray[data.postArray.length - req.body.position].replies.push({
    replyText: req.body.replyText,
    replyAuthor: req.body.replyAuthor,
    replyTime: req.body.replyTime
  })
  fs.writeFile("./data.json",
  JSON.stringify(data, null, 2),
  function(err){
    if (!err) {
      res.status(200).send()
    } else {
      res.status(500).send("Error: error saving the reply.")
    }
  })
})

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port)
});