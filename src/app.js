const express = require("express");

const app = express();

app.use( '/test', 

    ( req, res, next ) => {
        console.log(1);
        res.send(1);
    },

    ( req, res, next ) => {
        console.log(2);
        res.send(2);
    }

)

app.use( '/user', ( req, res ) => {
    //leave it empty
    res.send("user is Shivkar Singh ")
    console.log("empty1");
});

app.get( "/user", (req,res) => {

    const obj = {
        firstName : "Shivkar",
        lastName : "Singh"
    };

    res.send(obj);

});

app.get( "/product" ,( req, res ) => {

    console.log(req.query);
    res.send(`id = ${req.query.id} && price = ${req.query.price}`);

});


app.get( "/product/:id", ( req, res ) => {

    console.log(req.params.id);
    res.send(`id = ${req.params.id}`);

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