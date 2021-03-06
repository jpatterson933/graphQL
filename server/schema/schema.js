// here we are requiring graphql into the program which it will later be used to destructure schema elements
const graphql = require('graphql');

const _ = require('lodash');

const Book = require('../models/book');
const Author = require('../models/author');

// here we are destructering schema typs from graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// graphql schema for books
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            // resolve function is responsible for going out and grabbing data
            resolve(parent, args) {
                //we are looking through the authors array for the author that is equal to the parent id for the book that has the corresponding author id
                // return _.find(authors, { id: parent.authorid })
                return Author.findById(parent.authorid);
            }
        }
    })
});

// graphql schema for authors
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return _.filter(books, { authorid: parent.id })
                return Book.find({ authorid: parent.id });
            }
        }
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
                // return _.find(books, { id: args.id });
                return Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(authors, { id: args.id });
                return Author.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return books;
                //when you use the find method without passing any critera it will return all books
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                // return authors;
                return Author.find({});
            }
        }
    }
});

//this will allow us to add data, delete data, update data
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                //save new author to our database
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorid: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorid: args.authorid
                });
                return book.save();
            }
        }
    }
})

//we create a new schema down here
//pass options in and define the query as the root query we have defined above
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})