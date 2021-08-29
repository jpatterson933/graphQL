import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorid: ''
        };
    }
    displayAuthors() {
        var data = this.props.data;
        if (data.loading) {
            return (<option disabled>Loading Authors...</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}> {author.name} </option>);
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>

                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({ authorid: e.target.value })}>
                        <option>Select authors</option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>+</button>

            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);