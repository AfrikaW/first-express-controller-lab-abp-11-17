var express = require('express')
const SiteController = require('./controllers/SiteController.js')
var app = express()

// Load Controllers


app.get ("/", SiteController.index)
app.get ("/about", SiteController.about)
app.get ("/other", SiteController.other)

// Routes


module.exports = app
