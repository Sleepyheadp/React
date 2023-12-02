import "./App.css";

function App() {
  return (
    <main className="container">
      <h1
        style={{
          color: "red",
          fontSize: "32px",
        }}
      >
        欢迎使用本应用 🍂
      </h1>
      <div>
        <label htmlFor="content">微博内容：</label>
        <textarea
          id="content"
          placeholder="写点什么吧..."
          cols="30"
          rows="5"
        ></textarea>
        <button type="submit" onClick={null}>
          发布
        </button>
      </div>
    </main>
  );
}

export default App;
