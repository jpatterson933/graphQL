// here we are requiring graphql into the program which it will later be used to destructure schema elements
const graphql = require('graphql');

const _ = require('lodash');

// here we are destructering schema typs from graphql itself
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID
 } = graphql;

// dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
];

//this is our graphql schema for books
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

// the rootquery is how we initally jump into the graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //each field will be a type of root query eg. grab a book, grab an author, grab all books or all authors etc.
    fields: {
        // when someone queryies a book, the code below will be used - using args 'id' GraphQL String
        // then once the query is received, the resolve funciton will fire - the resolve function will take a parent parameter and an 
        // args param that will ocntain an id feild the user sends along with the query
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            //parent comes into play when we look at relationships between data
            resolve(parent, args) {
                // code to get data from db / other source

                // we use lodash to look through the books array and return or find any book with an id equal to an id equal to the args that the user sends along
                return _.find(books, { id: args.id });
            }
        }
    }
})

//we create a new schema down here
//pass options in and define the query as the root query we have defined above
module.exports = new GraphQLSchema({
    query: RootQuery
})