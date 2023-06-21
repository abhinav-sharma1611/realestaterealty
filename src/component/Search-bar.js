import React, { useState } from "react";
import NavUseState from "/src/component/NavUseState"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    // event.preventDefault();
    // onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        placeholder="City, Address, School, Agent, ZIP"
        value={searchTerm}
        onChange={handleInputChange}
        className="searchbar"
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
