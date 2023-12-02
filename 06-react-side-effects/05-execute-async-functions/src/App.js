import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    updateTime();
  }, []);

  async function updateTime() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setDateTime(new Date());
  }

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
    </main>
  );
}

export default App;
