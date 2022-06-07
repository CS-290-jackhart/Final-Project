var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var data = require("./data.json")

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).render('mainPage', {
        duckies: data
    })
})

// app.get('*', function (req, res) {
//   //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port)
});