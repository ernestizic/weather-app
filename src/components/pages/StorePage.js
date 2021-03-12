import React from 'react';
import BookContextProvider from '../../contexts/BookContext';
import BookGrid from '../books/BookGrid';
import { Link } from 'react-router-dom';

const StorePage = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2 style={{color: '#030d44', paddingLeft: '40px'}}><Link className="links" to="/"> Home </Link> / Store</h2>
            </div>
            <div className="container">
                <h3 style={{paddingTop: "20px"}}>New Releases Books</h3>
                <BookContextProvider>
                    <BookGrid />
                </BookContextProvider>
            </div>
        </React.Fragment>
     );
}
 
export default StorePage;