import React, {useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';

const FreeBook = () => {
    const {fetchFreeBook} = useContext(BookContext);

    console.log(fetchFreeBook.length)
    

    return ( 
        <div>
            <p style={{textAlign: 'center'}}>Nothing to see here</p>
        </div>
     );
}
 
export default FreeBook;