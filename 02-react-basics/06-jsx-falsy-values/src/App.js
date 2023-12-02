import "./App.css";

function App() {
  let title = NaN;
  return (
    <main className="container">
      <h1
        style={{
          color: "red",
          fontSize: "32px",
        }}
      >
        {title}
      </h1>
      <div>
        <textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
        <button>发布</button>
      </div>
    </main>
  );
}

export default App;
