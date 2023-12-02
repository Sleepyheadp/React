import "./App.css";

function App() {
  const title = "欢迎使用本应用1 🍂";

  return (
    <main>
      <h1>{title}</h1>
      <div>
        <textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
        <button>发布</button>
      </div>
    </main>
  );
}

export default App;
