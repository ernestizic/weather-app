import React from 'react';
import BookContextProvider from '../../contexts/BookContext';
import BookGrid from '../books/BookGrid';

const StorePage = () => {
    return ( 
        <div>
            <BookContextProvider>
                <BookGrid />
            </BookContextProvider>
        </div>
     );
}
 
export default StorePage;