const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.listen(3500, (req, res)=> {
    console.log('OUR WEB PAGE WORKS !!!!--from server.js listening to 3500');
});
