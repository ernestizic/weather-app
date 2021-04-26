import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
    return ( 
        <div className="col-lg-3 col-sm-6">
            <Link to={`/books/${props.book.isbn13}`} className="grids">
                <div className="card">
                    <img className="card-img-top" src={props.book.image} alt="Card img cap" />
                    <div className="card-body">
                        <p className="card-title" title={props.book.title}>{props.book.title}</p>
                        {props.book.price === '$0.00' ? (
                            <p style={{color: '#b2395b', fontWeight: 'bold'}}>Free Book</p>
                            ) : (
                            <p className="card-text" style={{color: '#b2395b', fontWeight: 'bold'}}>{props.book.price}</p>
                        ) }
                        
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default BookItem;