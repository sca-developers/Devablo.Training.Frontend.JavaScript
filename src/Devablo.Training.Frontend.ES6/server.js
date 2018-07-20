const express = require('express')
var path = require('path');
const app = express()

app.use('/es6', express.static('es6'))
app.use('/js', express.static('js'))
app.use(express.static('wwwroot'))

app.listen(3000)