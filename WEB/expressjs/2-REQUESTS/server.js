const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog.js')


app.use('/blog', blog)  // handle for /blog end point

// app.use(express.static('public'))


app.get('/', (req, res) => {
  console.log("it is a get request");
  res.send('Hello World get1!');
})
.post('/', (req, res) => {
  console.log("it is a post request");
  res.send('Hello World post!');
}).put('/', (req, res) => {
  console.log("it is a put request");
  res.send('Hello World put!');
})
// we can also chain methods
app.get('/index', (req, res) => {
  // res.send('Hello World index!');
  res.sendFile('templates/index.html', {root: __dirname});
})
app.get('/api', (req, res) => {
  // res.send('Hello World index!');
  res.json({a:1, b:2, c:3, address: {x: "nankana", y: "punjab", z: "pakistan"}});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})