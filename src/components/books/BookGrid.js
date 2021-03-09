import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import BookItem from './BookItem';

const BookGrid = () => {
    const {books, isLoading} = useContext(BookContext);

    let bookGrid = isLoading ? (
        <h3>Fetching items from store</h3>
    ) : (
        books.map(book => (
            <BookItem key={book.isbn13} book={book} />
        ))
    )
    return ( 
        <div className="container">
            <div className="row">
                {bookGrid}
            </div>
        </div>
     );
}
 
export default BookGrid;