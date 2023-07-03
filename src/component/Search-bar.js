import React, { useState } from 'react';




const SearchBar = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');




  const handleInputChange = (event) => {

    // setSearchTerm(event.target.value);

  };




  const handleSearch = (event) => {

    // event.preventDefault();

    // onSearch(searchTerm);

  };




  return (

    <form onSubmit={handleSearch} className="d-flex">

      <input

        type="text"

        placeholder="Search"

        value={searchTerm}

        onChange={handleInputChange}

        className="searchbar"

      />

      <button type="submit" className="btn btn-primary">Search</button>

    </form>

  );

};




export default SearchBar;