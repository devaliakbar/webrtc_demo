const express = require("express");
const path = require("path");
var fs = require('fs');
var https = require('https');

const app = express();
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

///CREATE TESTING CERTIFICATE AND PUT THOSE FILES INSIDE CERT FOLDER. CHECK THIS LINK https://web.dev/how-to-use-local-https/#setup
var privateKey = fs.readFileSync('cert/localhost-key.pem', 'utf8');
var certificate = fs.readFileSync('cert/localhost.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };

var httpsServer = https.createServer(credentials, app);


httpsServer.listen(8000, () => {
    console.log("Server is up on port " + 8000);
});