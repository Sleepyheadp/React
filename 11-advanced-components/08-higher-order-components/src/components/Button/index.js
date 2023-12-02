import WithTheme from "components/WithTheme";
import React from "react";

function Button({ children, theme }) {
  return (
    <button
      style={{
        boxShadow:
          theme === "dark" ? "0 0 48px rgba(255, 255, 255, 0.4)" : "none",
      }}
    >
      {children}
    </button>
  );
}

export default WithTheme(Button);
