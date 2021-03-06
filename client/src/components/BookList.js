import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
    //this constructor tracks which item is selected
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading Books...</div>)
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }} >{book.name}</li>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookid={this.state.selected} />
            </div>
        )
    }
}

// we are binding BookList to the get Books Query using graphql
export default graphql(getBooksQuery)(BookList);