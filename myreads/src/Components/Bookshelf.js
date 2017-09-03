import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
	static propTypes = {
		shelfTitle: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	render() {
		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
				<div className="bookshelf-books">
					<ul className="books-grid">
						{this.props.books.map((book) => (
							<li key={book.id}>
								<Book onShelfChange={this.props.onShelfChange} book={book} />
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Bookshelf;