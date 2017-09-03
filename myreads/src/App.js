import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Bookshelf from './Components/Bookshelf';
import BookSearch from './Components/BookSearch';

class App extends React.Component {
		
	state = {
	  books: []
	}

	componentDidMount() {
		this.getAllBooks();
	}

	getAllBooks() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books });
		})
	}

	changeBookShelf(book, shelf) {
		console.log(book);
		console.log(shelf);
		BooksAPI.update(book.props.book, shelf).then(this.getAllBooks());	
	}

	render() {
		return (
			<div>
			<Route exact path="/" render={() => (
				<div>
					<Header />
					<Bookshelf 
						shelfTitle='Currently Reading' 
						books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
						onShelfChange={this.changeBookShelf.bind(this)}
					/>
					<Bookshelf 
						shelfTitle='Want to Read' 
						books={this.state.books.filter(book => book.shelf === 'wantToRead')}
						onShelfChange={this.changeBookShelf.bind(this)}
					/>
					<Bookshelf 
						shelfTitle='Read' 
						books={this.state.books.filter(book => book.shelf === 'read')}
						onShelfChange={this.changeBookShelf.bind(this)}
					/>
					<div className="open-search">
						<Link to="/search">Add a book</Link>
					</div>
				</div>
			)}/>
				
			<Route path="/search" render={() => (
				<BookSearch books={this.state.books}
					onShelfChange={this.changeBookShelf.bind(this)}
				/>
			)}
			/>
		</div>	
		)
	}
}

export default App
