// src/components/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the current search term up to the parent
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search contacts by name..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;