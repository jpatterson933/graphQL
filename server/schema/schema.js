//here we are requiring graphql into the program which it will later be used to destructure schema elements
const graphql = require('graphql');

//here we are destructering schema typs from graphql itself
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//this is our graphql schema for books
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

//the rootquery is how we initally jump into the graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //each field will be a type of root query eg. grab a book, grab an author, grab all books or all authors etc.
    fields: {
        //when someone queryies a book, the code below will be used - using args 'id' GraphQL String
        //then once the query is received, the resolve funciton will fire - the resolve function will take a parent parameter and an 
        //args param that will ocntain an id feild the user sends along with the query
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            //parent comes into play when we look at relationships between data
            resolve (parent, args) {
                //code to get data from db / other source
            }
        }
    }
})

//we create a new schema down here
//pass options in and define the query as the root query we have defined above
module.exports = new GraphQLSchema({
    query: RootQuery
})