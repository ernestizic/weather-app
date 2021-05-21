import React from 'react';
import BookGrid from '../books/BookGrid';

const IndexPage = () => {
    
    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2>Welcome to IT Bookstore</h2>
                <h3>IT, Programming and Computer Science Books</h3>
            </div>
            <div className="container">
                <h3 style={{paddingTop: "20px"}}>New Releases Books</h3>
                <BookGrid />
            </div>
        </React.Fragment>
        
     );
}
 
export default IndexPage;