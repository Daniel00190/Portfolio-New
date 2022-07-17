const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')


app.listen(port, () => {
    console.log(`hello world ${port}`)
})

// app.set('view engine', 'ejs');
app.use(express.static('views'))

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '/views/home.html'));
    console.log(__dirname)
});