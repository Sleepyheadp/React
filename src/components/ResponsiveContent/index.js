import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

function ResponsiveContent() {
  const windowSize = useWindowSize(50);
  return (
    <div style={{ marginTop: 48 }}>
      <h2>ResponsiveContent 组件</h2>
      <h3>Width: {windowSize.width}</h3>
      <h3>Height: {windowSize.height}</h3>
    </div>
  );
}

export default ResponsiveContent;
