import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const BookDetail = () => {
    const { book_id } = useParams();

    const [bookDetail, setBookDetail] = useState(null);

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/books/${book_id}`)
            .then(res =>
                    //console.log(res.data)
                    setBookDetail(res.data)
                )
    }, [book_id])

    const book = bookDetail ? (
        <div className="container">
            <h4 style={{ paddingTop: "20px", paddingBottom: "10px" }}>{bookDetail.title}</h4>
            <p>{bookDetail.price}</p>
        </div>
    ) : (
        <div className="container"> Loading details... </div>
    )
    return ( 
        <div>
            {book} 
        </div>
     );
}
 
export default BookDetail;