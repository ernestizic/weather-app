import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import Spinner from '../ui/Spinner';
import BookItem from './BookItem';

const BookGrid = () => {
    const {books, isLoading} = useContext(BookContext);

    let bookGrid = isLoading ? (
        <div>
            <Spinner />
        </div>
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