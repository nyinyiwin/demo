var express = require("express");
var app = express();
app.get('/',function(req,res) {
 res.send("<html><body>hello world.</body></html>");
    
});

var server = app.listen(5000,function(){
    console.log("server is running,");
});