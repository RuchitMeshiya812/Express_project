const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/home', (req, res) => {
//   res.send('Hello World from home!')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello World from about!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello World from contact!')
// })
// app.get('/contact/ruchit', (req, res) => {
//   res.send('Hello ruchit from contact!')
// })
// app.get('/contact/krish', (req, res) => {
//   res.send('Hello krish from contact!')
// })
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})
app.get('/contact/ruchit', (req, res) => {
  res.sendFile(__dirname+'/contact/ruchit.html')
})
app.get('/contact/krish', (req, res) => {
  res.sendFile(__dirname+'/contact/krish.html')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})