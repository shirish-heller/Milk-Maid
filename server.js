const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(3500, (req, res)=> {
    console.log('OUR WEB PAGE WORKS !!!!--from server.js listening to 3500');
});
