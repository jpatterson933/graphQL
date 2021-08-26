const express = require('express');
//must destructure graphqlhttp due to an update
const { graphqlHTTP } = require('express-graphql');

const app = express();

//this is a middleware function
app.use('/graphql', graphqlHTTP({

}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})