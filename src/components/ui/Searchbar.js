import React, { useState } from 'react';

const Searchbar = () => {
    const [searchText, setSearchText] = useState(null);

    return ( 
        <form style={{ display: "flex" }} className="search">
            <input 
                type="search" 
                className="form-control"
                placeholder="Search books by Title, Author or ISBN"
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)} 
            />
        </form>
     );
}
 
export default Searchbar;