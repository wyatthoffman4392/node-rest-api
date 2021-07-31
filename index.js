// imports
const express = require("express");
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// get request routing
app.get('/', (req, res) => {
    res.json({'message': 'test success message body received'})
});

// request listener
app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});
