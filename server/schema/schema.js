//here we are requiring graphql into the program which it will later be used to destructure schema elements
const graphql = require('graphql');

//here we are destructering schema typs from graphql itself
const { GraphQLObjectType, GraphQLString } = graphql;

//this is our graphql schema for books
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});