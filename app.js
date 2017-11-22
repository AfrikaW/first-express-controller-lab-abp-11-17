const express = require('express')

const app = express()

// Load Controllers


app.get ("/", SiteController.index)
app.get ("/about", SiteController.about)
app.get ("/other", SiteController.other)

// Routes


module.exports = app
