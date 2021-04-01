import React, { useContext,useState } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';

const Searchbar = () => {

    const {getQuery} = useContext(SearchBooksContext);

    const [text, setText] = useState("");

    const handleSearch = async(e)=> {
        e.preventDefault();
        //console.log(text)
        getQuery(text);
    }

    return ( 
        <form className="search" onSubmit={handleSearch}>
            <div className="input-group">
                <input 
                    type="search" 
                    className="form-control"
                    placeholder="Search books by Title, Author or ISBN"
                    value={text}
                    onChange={(e)=> setText(e.target.value)} 
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