import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;

  // 2. 需要放到 state 中
  const [count, setCount] = useState(0);

  function increase() {
    // count++; 不起作用
    setCount(count + 1);
  }

  return (
    <div className="container">
      {/* // 3. 自动刷新 */}
      <h1>{count}</h1>
      <button onClick={increase}>增加</button>
    </div>
  );
}
export default App;
