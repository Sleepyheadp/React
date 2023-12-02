import React from "react";
import "./style.css";

function SearchNote({ searchTerm, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder="搜索笔记"
      />
    </div>
  );
}

export default SearchNote;
