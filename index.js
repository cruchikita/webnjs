const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('web');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.render('thanks');
})

app.use('/', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
