import SearchInput from "components/SearchInput";
import "./App.css";

function App() {
  return (
    <main className="container">
      <SearchInput
        onChange={(query) => {
          console.log(query);
        }}
      />
    </main>
  );
}

export default App;
