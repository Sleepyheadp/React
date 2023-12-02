import "./style.css";

import React from "react";

function Layout({ nav, children }) {
  return (
    <div className="container">
      <nav>{nav}</nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
