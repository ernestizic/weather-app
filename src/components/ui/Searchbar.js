import React, { useContext, useState } from "react";
import { StyledSearchbar } from "../styles/Searchbar.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchCityContext } from "../../contexts/SearchCityContext";
import {useHistory} from 'react-router';

const Searchbar = () => {
  const { getQuery } = useContext(SearchCityContext);
  const history = useHistory();

  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
    });
    getQuery(keyword);
  };

  return (
    <StyledSearchbar onSubmit={handleSearch}>
      <AiOutlineSearch className='search-icon' />
      <input
        type='search'
        placeholder='Check for the weather in a location'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <button type='submit'>Search</button>
    </StyledSearchbar>
  );
};

export default Searchbar;
