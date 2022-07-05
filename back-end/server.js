const express = require('express')
const app = express()
const port = 3000
const path = require('path')


// app.use('/static', express.static(path.join(__dirname, 'html', 'home.html')))

app.use(express.static('./html'))
app.listen(port, () => {
    console.log(`hello world ${port}`)
})

app.get('/',function(req,res) {
    res.render('home');
});
