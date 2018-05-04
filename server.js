const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.listen(3500, (req, res)=> {
    console.log('OUR WEB PAGE WORKS !!!!--from server.js listening to 3500');
});
