import React from "react";

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
