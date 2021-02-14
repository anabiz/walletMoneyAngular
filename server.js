
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/myNewapp'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/myNewApp/index.html'));
// });

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'myNewApp', 'index.html');
    res.sendFile(index);
  });
  

// Start the app by listening on the default
app.listen(process.env.PORT || 8080);