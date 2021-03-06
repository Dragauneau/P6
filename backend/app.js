const express = require('express'); 
const mongoose = require('mongoose');
const { isLoggedIn } = require('./middlewares/auth');
const path = require('path');
var fs = require('fs')
var imagesDir = path.join(__dirname, 'images');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');


mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());
if (!fs.existsSync(imagesDir)){
    fs.mkdirSync(imagesDir);
}
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
app.use('/api/sauces', isLoggedIn, sauceRoutes);
module.exports = app;