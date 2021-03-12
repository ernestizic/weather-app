import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
    return ( 
        <div className="col-lg-3">
            <div className="card">
                <img className="card-img-top" src={props.book.image} alt="Card img cap" />
                <div className="card-body">
                    <h5 className="card-title" title={props.book.title}>{props.book.title}</h5>
                    <p className="card-text"><b>Price:</b> {props.book.price}</p>
                    <Link to={`/books/${props.book.isbn13}`}>PURCHASE</Link>
                </div>
            </div>
        </div>
     );
}
 
export default BookItem;