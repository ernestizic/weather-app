import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider =(props)=> {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async ()=> {
            const result = await axios.get('https://api.itbook.store/')
            console.log(result.data);
            //setBooks(result.data)
            //setIsLoading(false)
        }
        
        fetchItems();
    }, [])

    return (
        <BookContext.Provider value={{books, isLoading}}> 
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
