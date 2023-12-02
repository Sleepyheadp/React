import { useEffect, useState } from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const windowSize = useWindowSize();

  return (
    <main className="container">
      <div>
        <h1>Width: {windowSize.width}</h1>
        <h1>Height: {windowSize.height}</h1>
      </div>
    </main>
  );
}

export default App;
