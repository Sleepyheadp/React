import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "张三",
        occupation: "前端工程师",
      });
    }, 3000);
  }, []);

  if (!user) {
    return <div className="loading">loading...</div>;
  }

  return (
    <main className="container">
      <p>用户名：{user.name}</p>
      <p>职业：{user.occupation}</p>
    </main>
  );
}

export default App;
