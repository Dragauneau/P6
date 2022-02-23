Créer un compte MongoDB https://account.mongodb.com/account/login
Créer une database --> create free  --> create cluster free skip
ccreer un user (admid admin par exemple)
Vérifier que l'acces sera autorisé --> network access --> add IP address -->add current IP address
une fois que le cluster est pret
Récupérer l'adresse de la DB --> database --> connect --> --> connect with dbCompass copier le lien de la database (Il devrait ressembler a ça mongodb+srv://<username>:<password>@cluster0.vtddu.mongodb.net/test)
crée un fichier ".env" 
Dans le fichier ".env.exemple" situé dans le dossier "backend", coller l'adresse apres "DB_URL ="
Rennomer le fichier en ".env"
Dans le dossier P6, lancer un npm install. Puis un npm start. la console devrait confirmer la connection a MongoDB et une fenetre de navigateur devrait s'ouvrir.

