import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Spinner from '../ui/Spinner';



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
        <React.Fragment>
            <div className="container-fluid"id="welcome-div">
                <h2 style={{color: '#030d44', paddingLeft: '40px'}}> {bookDetail.title} </h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3" style={{background:"#f8f8f8"}}>
                        <img src={bookDetail.image} alt="book-img" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <table className="table table-striped">

                            <tbody>
                                <tr>
                                    <td>eBook</td>
                                    <td>{bookDetail.price}</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>{bookDetail.rating} of 5</td>
                                </tr>
                                <tr>
                                    <td>Author</td>
                                    <td>{bookDetail.authors}</td>
                                </tr>
                                <tr>
                                    <td>Publisher</td>
                                    <td>{bookDetail.publisher}</td>
                                </tr>
                                <tr>
                                    <td>Published</td>
                                    <td>{bookDetail.year}</td>
                                </tr>
                                <tr>
                                    <td>Pages</td>
                                    <td>{bookDetail.pages}</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>{bookDetail.language}</td>
                                </tr>
                            </tbody>

                        </table>

                        <h5>Description</h5>
                        <p>{bookDetail.desc}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    ) : (
        <div className="container"><Spinner /> </div>
    )
    return ( 
        <div>                         
            {book} 
        </div>
     );
}
 
export default BookDetail;