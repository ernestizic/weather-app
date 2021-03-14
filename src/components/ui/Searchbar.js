import React, { useContext,useState } from 'react';
import { BookContext } from '../../contexts/BookContext';

const Searchbar = () => {

    const {searchBooks} = useContext(BookContext);

    const [query, setQuery] = useState("");

    const handleSearch =(e)=> {
        e.preventDefault();
        //console.log(query);
        searchBooks(query);
    }

    return ( 
        <form className="search" onSubmit={handleSearch}>
            <div className="input-group">
                <input 
                    type="search" 
                    className="form-control"
                    placeholder="Search books by Title, Author or ISBN"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)} 
                />
                <div className="input-group-append">
                    <button className="btn btn-danger" type="submit"> 
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
     );
}
 
export default Searchbar;