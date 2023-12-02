import SearchInput from "components/SearchInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  return (
    <main className="container">
      <SearchInput value={query} onChange={handleChange} />
      <h2>用户输入: {query}</h2>
    </main>
  );
}

export default App;
