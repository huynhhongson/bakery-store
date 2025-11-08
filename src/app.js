const express = require('express')
const path = require('path')
const engine  = require('express-handlebars');
const {mongoConnect, mongoDisconnect} = require('./config/db')
require('dotenv').config()
const app = express()
const port = process.env.PORT

async function connect(){
    await mongoConnect()

}

connect()
// Cấu hình Handlebars cho Express
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Route chính
app.get('/', (req, res) => {
    // res.render('home', { title: 'Sweet Bakery', cake: 'Chocolate Cake' });
    res.render('home')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})