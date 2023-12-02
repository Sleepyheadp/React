import { useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  const id = setInterval(() => {
    setDateTime(new Date());
  }, 1000);

  console.log(id);

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
    </main>
  );
}

export default App;
