import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks =()=> {
        axios.get('https://api.itbook.store/1.0/new')
            .then(res => {
                setBooks(res.data.books);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(true);
            });
    };

    return (
        <BookContext.Provider value={{books, isLoading}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
