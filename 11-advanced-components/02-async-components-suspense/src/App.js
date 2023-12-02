import { Suspense, lazy, useState } from "react";
import "./App.css";
// import About from "./components/About";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const About = lazy(() => delay(3000).then(() => import("./components/About")));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleButtonClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div>
      <h1>组件懒加载</h1>
      <button onClick={handleButtonClick}>
        {showAbout ? "隐藏关于" : "显示关于"}
      </button>
      {showAbout && (
        <Suspense fallback={<div>...loading</div>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}

export default App;
