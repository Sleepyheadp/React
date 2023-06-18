import React, { useState,useRef } from "react";

function SearchInput({ onChange }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef('')
  const handleChange = () => {
    // 把最新的值绑定到inputRef上
    const newValue = inputRef.current.value;
    setQuery(newValue);
    onChange(newValue);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        ref={inputRef}
      />
      {query}
    </>
  );
}

export default SearchInput;
