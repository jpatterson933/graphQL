//here we require express
const express = require('express');
//must destructure graphqlhttp due to an update
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

//here we define our express function as app
const app = express();

//this is a middleware function
app.use('/graphql', graphqlHTTP({
    schema: schema

}));

//this has our app listening and tells us that the server is live
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})