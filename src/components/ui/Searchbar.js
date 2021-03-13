import React, { useContext,useState } from 'react';
import { BookContext } from '../../contexts/BookContext';

const Searchbar = () => {

    const {query} = useContext(BookContext);

    const [searchText, setSearchText] = useState("");

    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(searchText);
    }

    return ( 
        <form className="search" onSubmit={handleSubmit}>
            <div className="input-group">
                <input 
                    type="search" 
                    className="form-control"
                    placeholder="Search books by Title, Author or ISBN"
                    value={searchText}
                    onChange={(e)=> setSearchText(e.target.value)} 
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