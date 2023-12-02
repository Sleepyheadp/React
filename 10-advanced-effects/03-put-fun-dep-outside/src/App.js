import { useCallback, useEffect, useState } from "react";
import "./App.css";

function getWeather(city) {
  if (city === "北京") return 20;
  if (city === "上海") return 25;
  if (city === "重庆") return 30;
}

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const [city, setCity] = useState("北京");
  const [weather, setWeather] = useState(20);

  useEffect(() => {
    console.log("running...");
    setWeather(getWeather(city));
  }, [city]);

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString()}</h1>
      <div>
        <p>
          {city}天气：{weather} 度
        </p>
        <label htmlFor="weather">选择天气：</label>
        <select id="weather" onChange={(e) => setCity(e.target.value)}>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="重庆">重庆</option>
        </select>
      </div>
    </main>
  );
}

export default App;
