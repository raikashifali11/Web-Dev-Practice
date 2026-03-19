const express = require('express')
const app = express()
const port = 3000
const fs = require("fs/promises");
const blog = require('./routes/blog.js')


app.use('/blog', blog)  // handle for /blog end point

// app.use(express.static('public'))

// Middleware 1 - logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.username = "kashif";
  fs.appendFile("logs.txt",`${Date()} is a ${req.method} request\n\n`)
  next()
})
// Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  next()
})


app.get('/', (req, res) => {
  res.send(`Hello ${req.username}`)
})
app.get('/about', (req, res) => {
  res.send('I am Kashif Sultan!')
})
app.get('/contact', (req, res) => {
  res.send('Contact me on gmail!')
})
app.get('/blog', (req, res) => {
  res.send('Our blogs are here')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})