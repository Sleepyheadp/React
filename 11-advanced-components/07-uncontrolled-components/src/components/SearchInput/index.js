import React, { useState } from "react";

function SearchInput({ onChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
