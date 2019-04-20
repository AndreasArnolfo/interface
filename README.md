# Appartoo test Node

### Instructions
L'objectif est de créer un mini carnet d'adresse pour "Marsupilami" sur Express.js (sous forme d'API) avec une DB Mongo de référence. 

- (Inscription/Connexion/Déconnexion) du "Marsupilami" par login/mot de passe 
- (Afficher/Modifier) ses informations (age / famille / race / nourriture) 
- (Ajouter/Supprimer) un "Marsupilami" (déjà inscrit) de sa liste d'amis.

### Tech

* [Angular 6] 
* [node.js] 
* [Express] 

### Installation

Install.

```sh
$ git clone https://github.com/AndreasArnolfo/AppartooTestNode.git
$ npm install 
$ nodemon // npm install -g nodemon pour auto reload après chaque modifications.
```

Mongo DB.

Changer cette ligne par la votre, elle se trouve dans api/data/db.js .

```sh
$ mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
```

### Dépendances


    "@angular/animations": "^6.0.9",
    "@angular/cdk": "^6.4.0",
    "@angular/common": "^6.0.3",
    "@angular/compiler": "^6.0.3",
    "@angular/core": "^6.0.3",
    "@angular/forms": "^6.0.3",
    "@angular/http": "^6.0.3",
    "@angular/material": "^6.4.0",
    "@angular/platform-browser": "^6.0.3",
    "@angular/platform-browser-dynamic": "^6.0.3",
    "@angular/router": "^6.0.3",
    "bcrypt": "^3.0.0",
    "bcrypt-nodejs": "0.0.3",
    "bootstrap": "^4.1.2",
    "core-js": "^2.5.4",
    "cors": "^2.8.4",
    "dotenv": "^6.0.0",
    "express-jwt": "^5.3.1",
    "font-awesome": "^4.7.0",
    "jquery": "^3.3.1",
    "js2xmlparser": "^3.0.0",
    "jsonwebtoken": "^8.3.0",
    "mongod": "^2.0.0",
    "mongodb": "^2.2.36",
    "mongoose": "^5.3.4",
    "ngx-toastr": "^8.9.1",
    "nodemon": "^1.18.3",
    "npm-run-all": "^4.1.3",
    "rxjs": "^6.2.2",
    "rxjs-compat": "^6.2.2",
    "tether": "^1.4.4",
    "x2js": "^3.2.1",
    "xmlify": "^1.1.0",
    "zone.js": "^0.8.26"
