Créer un compte MongoDB https://account.mongodb.com/account/login

Remplir le fomulaire comme ceci ![Atlas Onboarding  MongoDB - Opera_2](https://user-images.githubusercontent.com/88929412/155325019-a9f4b1c1-ae45-43f5-b110-19a3c36968de.jpg)

Pour créer une database --> create free  
![Choose a Path  Cloud MongoDB Cloud - Opera](https://user-images.githubusercontent.com/88929412/155325513-180b043f-e01a-4569-9eca-e441c1d1b34c.jpg) --> cliquer sur create cluster sans rien changer  
Creer un user (admin admin par exemple)
Autoriser l'acces --> add current IP address 


(Si vous utilisez un VPN il est possible que cela pose problème, dans ce cas, cliquer sur Network Acces --> add IP Address --> allow access from anywhere --> confirm
une fois que le cluster est pret


Récupérer l'adresse de la DB --> database --> connect --> --> connect with dbCompass --> copier le lien de la database (Il devrait ressembler a ça mongodb+srv://`<username>`:`<password>`@cluster0.vtddu.mongodb.net/test )
  
  
crée un fichier ".env" dans le dossier "backend"
  
  
Copier le contenus du fichier .env.exemple et le coller dans le .env
  
  
Dans le fichier ".env" , coller l'adresse apres "DB_URL =" Il faudra ensuite modifier `<username>` et `<password>` par l'identifiant et le mot de passe que vous avez créé ultérieurement
  
Dans le dossier P6, lancer un npm install. Puis un npm start. la console devrait confirmer la connection a MongoDB et une fenetre de navigateur devrait s'ouvrir.

