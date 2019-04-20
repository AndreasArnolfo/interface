/*global console, require, module, process, express */
var mongoose = require("mongoose");
var User = require("../data/users.model.js");
var retry = null;
var express = require("express");

var server = express();

mongoose.connect('mongodb://localhost:27017/testBDD', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
    "use strict";
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected through " + msg);
        callback();
    });
}

// For nodemon restarts
process.once("SIGUSR2", function () {
    gracefulShutdown("nodemon restart", function () {
        process.kill(process.pid, "SIGUSR2");
    });
});
// For app termination
process.on("SIGINT", function () {
    gracefulShutdown("App termination (SIGINT)", function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on("SIGTERM", function () {
    gracefulShutdown("App termination (SIGTERM)", function () {
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS
require("./contact.model");
mongoose.model("User");
