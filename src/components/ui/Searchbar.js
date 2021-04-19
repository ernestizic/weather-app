import React, { useContext,useState } from 'react';
import { BookContext } from '../../contexts/BookContext';

const Searchbar = () => {

    const {getQuery} = useContext(BookContext);

    const [text, setText] = useState("");

    const handleSearch = async(e)=> {
        e.preventDefault();
        //console.log(text)
        getQuery(text);
        setText("");
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