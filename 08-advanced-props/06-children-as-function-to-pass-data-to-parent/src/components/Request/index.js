import { useEffect, useState } from "react";

function Request({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData({ user: "张三" });
      setLoading(false);
    }, 2000);
  }, []);

  return children({ loading, data });
}

export default Request;
