import React from "react";

function Menu({ children }) {
  return <nav>{children}</nav>;
}

function Item({ children }) {
  return <a href="#">{children}</a>;
}

Menu.Item = Item;

export default Menu;
