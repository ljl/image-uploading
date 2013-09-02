var express = require('express');
var app = express();

app.post('/upload', express.bodyParser({ keepExtensions: true, uploadDir: __dirname+'/public/upload' }), function(req, res) {
    console.log(req.files);
    req.setEncoding( "utf8" );
    var imagePath = req.files.image.path;
    var response = imagePath.substring(imagePath.indexOf("\\upload"), imagePath.length);
    console.log(response);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', response.length);
    res.end(response);
});

app.use(app.router);
app.use(express.static(__dirname+'/public'));

app.listen(3000);