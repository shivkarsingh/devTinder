const express = require("express");

const app = express();


app.use( "/", (err, req, res, next) => {

    if(err){
        res.status(500).send("something went wrong");
    }

});


app.get( "/test", (req, res) => {
    
    throw new Error("errrr...");
    res.send(" err from errr....");
 
});

app.use( "/", (err, req, res, next) => {

    if(err){
        res.status(500).send("something went wrong");
    }

});


app.listen( 7777, () => {
    console.log("server is listening on port 7777.....");
});










