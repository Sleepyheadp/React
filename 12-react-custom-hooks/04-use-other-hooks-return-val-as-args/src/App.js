import "./App.css";
import ResponsiveContent from "./components/ResponsiveContent";
import useWindowSize from "./hooks/useWindowSize";
import useBreakpoint from "./hooks/useBreakPoint";

function App() {
  const windowSize = useWindowSize(500);
  const breakpoint = useBreakpoint(windowSize.width);

  return (
    <main className="container">
      <div>
        <h1>Width: {windowSize.width}</h1>
        <h1>Height: {windowSize.height}</h1>
        <h1>Break Point: {breakpoint}</h1>
      </div>
      <ResponsiveContent />
    </main>
  );
}

export default App;
