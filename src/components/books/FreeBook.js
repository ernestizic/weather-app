import React, {useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';

const FreeBook = () => {
    const {books} = useContext(BookContext);

    let freeBooks = books.map(book => {
        book.filter(freeebook=> (
            freeebook.price === "$0.00"
        ))
        if (book.price === "$0.00"){
            return(
                <div className="row">
                    <div className="col-md-4">
                        <h5>{book.title}</h5>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <p>No free books</p>
                </div>
            )
        }
    })

    return ( 
        <div>
            {freeBooks}
        </div>
     );
}
 
export default FreeBook;