import React, { Component } from 'react';

class Book extends Component {
	shelfChangeHandler(e) {
    	this.props.onShelfChange(this, e.target.value);
  	}

	render() {
		const book = this.props.book;
		
		return(
			<div className="book">
      	<div className="book-top">
        	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
        	<div className="book-shelf-changer">
          	<select onChange={this.shelfChangeHandler.bind(this)} value={book.shelf === undefined ? "none" : book.shelf}>
            	<option value="none" disabled>Move to...</option>
            	<option value="currentlyReading">Currently Reading</option>
            	<option value="wantToRead">Want to Read</option>
            	<option value="read">Read</option>
            	<option value="none">None</option>
          	</select>
        	</div>
      	</div>
      	<div className="book-title">{book.title}</div>
      	<div className="book-authors">{book.authors}</div>
    	</div>
		)
	}
}

export default Book;