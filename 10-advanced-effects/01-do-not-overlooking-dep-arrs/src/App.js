import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log("创建了 Id " + id);

    return () => {
      clearInterval(id);
      console.log("清除了 Id " + id);
    };
  }, []);

  return (
    <main className="container">
      <h1>{seconds}</h1>
    </main>
  );
}

export default App;
