import React from 'react';
import { Link } from 'react-router-dom';
import BookContextProvider from '../../contexts/BookContext';
import FreeBook from '../books/FreeBook';

const FreeBookPage = () => {

    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2 style={{color: '#030d44', textAlign: 'center'}}> Free IT, Programming and Computer Science Books </h2>
            </div>
            <div className="container">
                <h5 style={{paddingTop: "20px"}}> <Link className="link" to="/"> Home </Link> / Free eBooks </h5>
                <BookContextProvider>
                    <FreeBook />
                </BookContextProvider>
            </div>
        </React.Fragment>
     );
}
 
export default FreeBookPage;