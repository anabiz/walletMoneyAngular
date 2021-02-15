
//Install express server
const express = require('express');
const path = require('path');

const app = express();

const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.jpeg'
  ];
  
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/myNewapp'));

app.get('*', function(req,res) {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.join(__dirname+`/dist/myNewApp/${req.url}`));
     } else {
        res.sendFile(path.join(__dirname+'/dist/myNewApp/index.html'));
     }
  
// res.sendFile(path.join(__dirname+'/dist/myNewApp/index.html'));
});


// Start the app by listening on the default
app.listen(process.env.PORT || 8080);