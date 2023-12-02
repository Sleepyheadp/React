import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    console.log(id);

    return () => {
      clearInterval(id);
      console.log("清理了 id 为" + id + "的 interval");
    };
  }, []);

  useEffect(() => {
    setDateTime(new Date());
  }, [refresh]);

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
      <button onClick={() => setRefresh(refresh + 1)}>校准</button>
    </main>
  );
}

export default App;
