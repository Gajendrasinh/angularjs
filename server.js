const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, 'app')));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname , 'app/index.html'))
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});