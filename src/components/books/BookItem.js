import React from 'react';
import { Link } from 'react-router-dom';
import ZeroRating from '../ui/ZeroRating';

const BookItem = ({book}) => {
    return ( 
        <div className="col-lg-3 col-sm-6">
            <Link to={`/books/${book.isbn13}`} className="grids">
                <div className="card">
                    <img className="card-img-top" src={book.image} alt="Card img cap" />
                    <div className="card-body">
                        <p className="card-title" title={book.title}>{book.title}</p>
                        <div className="rate-price">
                            <ZeroRating />

                            {book.price === '$0.00' ? (
                                <p style={{color: '#b2395b', fontWeight: 'bold'}}>Free eBook</p>
                                ) : (
                                <p className="card-text" style={{color: '#b2395b', fontWeight: 'bold'}}>{book.price}</p>
                            ) }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default BookItem;