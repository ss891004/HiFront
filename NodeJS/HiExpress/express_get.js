//get方法
var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/express_get.html', function (req, res) {
    res.sendFile( __dirname + "/" + "express_get.html" );
})
 
app.get('/process_get', function (req, res) {
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
   
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http:%s:%s", host, port)
})