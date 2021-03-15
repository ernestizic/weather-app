import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searched, setSearched] = useState([]);
    
 
    const searchBooks =(query)=> {
        axios.get(`https://api.itbook.store/1.0/search/${query}`)
            .then(res => {
                //console.log(res.data.books)
                setIsLoading(true);
                setSearched(res.data.books);
                setIsLoading(false);
            })
    }


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
        <BookContext.Provider value={{books, isLoading, searched, searchBooks}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
