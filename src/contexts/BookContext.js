import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const [query, setQuery] = useState('');

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks =()=> {
        axios.get('https://api.itbook.store/1.0/new')
            .then(res => {
                //console.log(res.data.books)
                setBooks(res.data.books);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(true);
            });
    };


    
    const getQuery =(text)=> {
        axios.get(`https://api.itbook.store/1.0/search/${text}`)
            .then(res => 
                //console.log(res.data)
                setBooks(res.data.books)   
            );
    };    

    return (
        <BookContext.Provider value={{books, isLoading, getQuery}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
