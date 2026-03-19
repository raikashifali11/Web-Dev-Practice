const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
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
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Javascript is king of industry')
// })
// app.get('/blog/intro-to-py', (req, res) => {
//   res.send('Python is also good programming language')
// })
// app.get('/blog/:slug', (req, res) => {
//   res.send(`hello ${req.params.slug}`)
//   console.log(req.params);
//   console.log(req.query);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})