import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>增加</button>
    </div>
  );
}
export default App;
