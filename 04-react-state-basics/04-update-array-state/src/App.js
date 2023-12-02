import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);

  function handleAdd() {
    setList([...list, list.length + 1]);
  }

  function handlePlusTen(index) {
    const newList = [...list];
    newList[index] += 10;
    setList(newList);
  }

  function handleDelete(item) {
    setList(list.filter((v) => v !== item));
  }

  return (
    <div className="container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handlePlusTen(index)}>+10</button>{" "}
            <button onClick={() => handleDelete(item)}>删除此项</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
export default App;
