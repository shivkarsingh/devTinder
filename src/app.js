const express = require("express");

const app = express();

app.get( "/user", (req,res) => {

    const obj = {
        firstName : "Shivkar",
        lastName : "Singh"
    };

    res.send(obj);

});


app.post( "/user", (req,res) => {

    // saving to db 
    res.send("Data successfully saved to db");

});


app.delete( "/user", (req,res) => {

    // deleting it
    res.send("Deleted Successfully");
    
});


app.listen( 3000, () => {
    console.log( "Server is successfully listening on port 3000..." );
});