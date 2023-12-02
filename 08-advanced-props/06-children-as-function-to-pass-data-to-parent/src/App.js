import "./App.css";
import Request from "./components/Request";

function App() {
  return (
    <main className="container">
      <Request>
        {({ loading, data }) => {
          if (loading) {
            return <div>loading...</div>;
          }
          return <div>{data?.user}</div>;
        }}
      </Request>
    </main>
  );
}

export default App;
