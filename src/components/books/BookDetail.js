import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';

const BookDetail = (props) => {
    const {books} = useContext(BookContext)

    const [bookDetail, setBookDetail] = useState(null);

    useEffect(() => {
        const fetchDetails = async ()=> {
            let id = props.match.params.book_isbn13;
            axios.get(`https://api.itbook.store/1.0/books/`+ id)
                .then(res =>
                    console.log(res.data) 
                    //setBookDetail(res.data)
                )
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