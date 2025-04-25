import React, { useState } from "react";
function SearchBar({ doctors, onSearch }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    onSearch(val);
    if (val.length > 0) {
      const filtered = doctors
        .filter((doc) => doc.name.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (name) => {
    setInput(name);
    onSearch(name);
    setSuggestions([]);
  };
  return (
    <div className="search-container">
      <input
        data-testid="autocomplete-input"
        type="text"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        value={input}
        onChange={handleChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((s, index) => (
            <li
              data-testid="suggestion-item"
              key={index}
              onClick={() => handleSelect(s.name)}
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;
