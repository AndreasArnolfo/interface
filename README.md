# Interface serveur vidéo

### Techno

* [Angular 6] 
* [node.js] 
* [Express] 

### Installation


```sh
$ git clone https://github.com/AndreasArnolfo/AppartooTestNode.git
$ npm install ou yarn install
$ nodemon ou npm start
```

Mongo DB.

Changer cette ligne par la votre, elle se trouve dans api/data/db.js .

```sh
$ mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
```

### Preview
[![N|Solid](https://media.discordapp.net/attachments/407467496887812097/569132369899159563/Capture_decran_2019-04-20_a_14.08.31.png)](https://nodesource.com/products/nsolid)
