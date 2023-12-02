import "./App.css";
import ResponsiveContent from "./components/ResponsiveContent";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const windowSize = useWindowSize(500);

  return (
    <main className="container">
      <div>
        <h1>Width: {windowSize.width}</h1>
        <h1>Height: {windowSize.height}</h1>
      </div>
      <ResponsiveContent />
    </main>
  );
}

export default App;
