const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const generatePassword = require('./public/javascripts/generate_password')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.redirect('/password')
})

app.get('/password', (req, res) => {
  res.render('index')
})

app.post('/password', (req, res) => {
  let customizedPassword = generatePassword.creatPassword(req.body)
  res.render('index', { customizedPassword })
})

app.listen(port, () => {
  console.log(`express server is runnng on http://localhost:${port}`)
})