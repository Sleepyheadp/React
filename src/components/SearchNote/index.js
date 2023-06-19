import React from "react";
import "./style.css";

function SearchNote({searchTerm,onChange}) {
  return (
    <div className="search">
      <input
          type="text"
          placeholder="搜索笔记"
          onChange={onChange}
          value={searchTerm}
      />
    </div>
  );
}

export default SearchNote;
