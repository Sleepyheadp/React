import "./App.css";
import UserDataCard from "./components/UserDataCard";

function App() {
  const userData = {
    count: 32.95,
    rate: "↑8.98%",
  };

  return (
    <main className="container">
      <UserDataCard message="hello world" userData={userData} />
    </main>
  );
}

export default App;
