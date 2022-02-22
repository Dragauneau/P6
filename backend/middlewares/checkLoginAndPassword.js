exports.checkLoginAndPassword = (req, res, next) => {
    if (req.body.email && req.body.password) {
        next();
    } else {
        res.status(400).json({ message: "Veuillez remplir l'email et le mot de passe" });
    }
};