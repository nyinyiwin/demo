var express = require("express");
var app = express();

app.get('/',function(req,res) {
 res.send("<html><body>hello world.</body></html>");
    
});

var server = app.listen(8080,function(){
    console.log("server is running,");
});