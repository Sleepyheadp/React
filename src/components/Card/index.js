import React from "react";
import "./style.css";

function Card({ children,name }) {
  return <div className="card">
    {name}
    {children}
  </div>;
}

export default Card;
