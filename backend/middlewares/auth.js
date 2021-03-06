const jwt = require('jsonwebtoken');
const Sauce = require('../models/Sauce');

exports.isLoggedIn = (req, res, next) => {
    try {
        if (req.method !== 'OPTIONS') {
            const token = req.headers.authorization.split(' ')[1]; 
            const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
            req.token = decodedToken;
        }
        next();

    } catch (error) {
        res.status(403).json({ error: error | 'Accès interdit' });
    }
}

exports.isOwner = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }).then(
        (sauce) => {
            if (sauce.userId !== req.token.userId) {
                return res.status(401).json({
                    error: new Error('Requete non autorisée !')
                });
            }
            next();
        }
    );
}

exports.loadSauce = (req, res, next) => {

    Sauce.findOne({ _id: req.params.id }).then(
        (sauce) => {
            if (!sauce) {
                return res.status(404).json({
                    error: new Error('Sauce non trouvé !')
                });
            }
            req.sauce = sauce;
            next();
        }
    );

}