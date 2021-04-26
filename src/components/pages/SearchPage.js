
import React from 'react';
//import SearchBooksContextProvider from '../../contexts/SearchBooksContext';
import SearchedBook from '../books/SearchedBook';

const SearchPage = () => {
    return ( 
        <div className='container'>
            <h3 style={{paddingTop: "20px"}}>Searched Books</h3>
            <SearchedBook />       
        </div>
     );
}
 
export default SearchPage;
