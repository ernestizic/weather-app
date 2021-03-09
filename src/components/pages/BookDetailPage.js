import React from 'react';
import BookContextProvider from '../../contexts/BookContext';
import BookDetail from '../books/BookDetail';

const BookDetailPage = () => {
    return ( 
        <div>
            <BookContextProvider>
                <BookDetail />
            </BookContextProvider>
        </div>
     );
}
 
export default BookDetailPage;