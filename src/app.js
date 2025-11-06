const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000


// Cấu hình Handlebars cho Express
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Route chính
app.get('/', (req, res) => {
    res.render('home', { title: 'Sweet Bakery', cake: 'Chocolate Cake' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})