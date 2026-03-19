const express = require('express')
const app = express()
const port = 3000

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "Rai";
  let searchText = "Search now";
  res.render("index", { siteName:siteName , searchText:searchText })
})
app.get('/blog/:slug', (req, res) => {
  let blogTitle = "JS";
  let blogContent = "It is a scripting language";
  res.sendFile("blogpost", {root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})