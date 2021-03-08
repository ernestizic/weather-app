import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import BookItem from './BookItem';

const BookGrid = () => {
    const {books, isLoading} = useContext(BookContext);

    let bookGrid = isLoading ? (
        <h3>Fetching items from store</h3>
    ) : (
        <div className="container">
            <div className="row">
                {books.map((book)=> (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
    return ( 
        <div>
            {bookGrid}
        </div>
     );
}
 
export default BookGrid;