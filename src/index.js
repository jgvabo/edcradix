var express = require('express');
var request = require('request');

var app = express();


//Getting port and normalizing value
var port = normalizePort(process.env.PORT || '3000');


//Default entrypoint for the root
app.get('/', (req, res) => {
    res.status(200).send('Hello from Radix App');
});

// Normalise the webserver port
function normalizePort(val) {
    var port = parseInt(val, 10)

    if (isNaN(port)) {
        // named pipe
        return val
    }

    if (port >= 0) {
        // port number
        return port
    }

    return false
}

//Starting webserver
app.listen(port, () => console.log('Quote app is listening on port %s!', port))

module.exports = normalizePort;