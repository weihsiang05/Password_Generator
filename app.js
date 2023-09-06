const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('express app for RandomPassord page')
})

app.listen(port, () => {
  console.log(`express server is runnng on http://localhost:${port}`)
})