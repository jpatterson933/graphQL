//here we require express
const express = require('express');
//must destructure graphqlhttp due to an update
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

// package that will allow us to allow cross origin requests
const cors = require('cors');

//here we define our express function as app
const app = express();

//this connects us to the mongoose database
const mongoose = require('mongoose');

// allow cross-origin request
app.use(cors());

mongoose.connect('mongodb+srv://jeff:test123@practicecluster.feyva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//this is an event listener
//once this event is open, we want a callback function to fire which will be the console.log to tell us when we are connected to the database
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

//this is a middleware function - this handles graphql requests
app.use('/graphql', graphqlHTTP({
    schema,
    //this allows us to use graphiql to test out graphql
    graphiql: true

}));

//this has our app listening and tells us that the server is live
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})