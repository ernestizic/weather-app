
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchCityContext = createContext();

const SearchCityContextProvider =(props)=> {

    const apikey = process.env.REACT_APP_API_KEY;

    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // Fetch weather data based on query from search form
    const getQuery = async(city)=> {
        setIsLoading(true)
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );
        const data = await res.data;
        console.log(data)
        setSearch(data);
        setIsLoading(false);
    }; 
    return ( 
        <SearchCityContext.Provider value={{search, isLoading, getQuery}}>
            {props.children}
        </SearchCityContext.Provider>
    );
}
export default SearchCityContextProvider;
