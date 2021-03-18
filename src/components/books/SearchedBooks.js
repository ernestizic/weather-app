/*
import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import Spinner from '../ui/Spinner';
import BookItem from './BookItem';

const BookGrid = () => {

    const {isLoading, searched} = useContext(BookContext);

    let bookGrid = isLoading ? (
        <div>
            <Spinner />
        </div>
    ) : (
        searched.map(book => (
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

*/