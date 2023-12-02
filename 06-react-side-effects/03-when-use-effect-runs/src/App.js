import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setDateTime(new Date());
  }, [refresh]);

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
      <button onClick={() => setRefresh(refresh + 1)}>刷新</button>
    </main>
  );
}

export default App;
