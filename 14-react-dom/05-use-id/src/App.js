import { useId } from "react";
import "./App.css";

function App() {
  const usernameId = useId();

  return (
    <main className="container">
      <div>
        <form>
          <label htmlFor={usernameId + "-username"}>用户名</label>
          <input type="text" id={usernameId + "-username"} />
        </form>
      </div>
    </main>
  );
}

export default App;
