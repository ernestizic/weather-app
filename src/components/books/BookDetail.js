//import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';

const BookDetail = (props) => {
    const {books} = useContext(BookContext)

    const [bookDetail, setBookDetail] = useState(null);

    useEffect(() => {
        const fetchDetails = async ()=> {
            console.log(props);     
            
        }
        fetchDetails();
    }, [props])
    return ( 
        <div>
            <h3>Book details</h3>
        </div>
     );
}
 
export default BookDetail;