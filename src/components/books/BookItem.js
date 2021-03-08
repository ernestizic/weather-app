import React from 'react';

const BookItem = (props) => {
    return ( 
        <div className="col-lg-3">
            <p>{props.book.id}</p>
        </div>
     );
}
 
export default BookItem;