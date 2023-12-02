import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "张三",
    age: 25,
    nest: {
      a: 1,
    },
  });

  function handleAdd() {
    setPerson({
      ...person,
      gender: "男",
    });
  }

  function handleChangeAge() {
    setPerson({
      ...person,
      age: 30,
    });
  }

  function handleRemoveAge() {
    const { age, ...newPerson } = person;
    setPerson(newPerson);
  }

  return (
    <div className="container">
      <ul>
        {Object.keys(person).map((key, index) => (
          <li key={index}>
            {key}: {person[key]}
          </li>
        ))}
      </ul>
      {/* <button onClick={handleAdd}>添加性别</button> */}
      {/* <button onClick={handleChangeAge}>修改年龄</button> */}
      <button onClick={handleRemoveAge}>删除年龄</button>
    </div>
  );
}
export default App;
