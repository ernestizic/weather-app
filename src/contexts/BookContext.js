import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

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

    useEffect(() => {
        const fetchQuery = async() => {
            const res = await axios(`https://api.itbook.store/1.0/search/${query}`)
                setQuery(res.data)
        }
        fetchQuery();
    }, [query])

    return (
        <BookContext.Provider value={{books, isLoading, query}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
