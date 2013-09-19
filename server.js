var connect = require('connect');
var port = 1990;

connect()
    .use(connect.static(__dirname))
    .listen(port);
console.log("Listening on http://localhost:"+port);