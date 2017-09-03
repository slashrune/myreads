import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class BookSearch extends Component {

	state = {
		books: [],
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() });
		this.getBooksResult();
	}

	clearQuery = () => {
		this.setState({ query: ''});
	}

	getBooksResult = () => {
		BooksAPI.search(this.state.query, 10).then((value) => (
			this.setState({books: value === undefined ? [] : value})
			));
	}

	render() {
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>  
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            	{this.state.books.map((book) => (
            	<li key={book.id}><Book book={book} onShelfChange={this.props.onShelfChange} /></li>
            	)
            )}
          </ol>
        </div>
    	</div>
		)
	}
}

export default BookSearch;