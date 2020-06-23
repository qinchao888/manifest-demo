const express = require('express')
const app = express()
const ejs = require('ejs')

app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static('public')) // 静态资源

app.get('/test1', (req, res) => {
  res.render('test1')
})

app.get('/test2', (req, res) => {
  res.render('test2')
})

app.listen(9999, () => console.log(`url:http://localhost:9999`))
