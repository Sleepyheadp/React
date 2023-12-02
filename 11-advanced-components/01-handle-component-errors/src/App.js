import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟请求远程数据
    try {
      const responseError = { status: 404, message: "not found" };
      throw responseError;
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>正常情况下显示的内容</div>;
}

export default App;
