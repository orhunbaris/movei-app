import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/movieSlice';
import './SearchBar.scss' 

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQueryInput] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryInput(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;