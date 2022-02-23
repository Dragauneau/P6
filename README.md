Créer un compte MongoDB https://account.mongodb.com/account/login
Créer une database --> create --> create cluster
Vérifier que l'acces sera autorisé --> network access --> add IP address -->add current IP address
Récupérer l'adresse de la DB --> database --> connect --> copier le lien de la database (Il devrait ressembler a ça mongodb+srv://<username>:<password>@cluster0.vtddu.mongodb.net/test)
Dans le fichier ".env.exemple" situé dans le dossier "backend", coller l'adresse apres "DB_URL ="
Rennomer le fichier en ".env"
Dans le dossier P6, lancer un npm install. Puis un npm start. la console devrait confirmer la connection a MongoDB et une fenetre de navigateur devrait s'ouvrir.

