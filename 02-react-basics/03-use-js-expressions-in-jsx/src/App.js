import "./App.css";

function App() {
  const title = "欢迎使用本应用 🍂";

  function getTitle() {
    return "欢迎使用本应用（函数） 🍂";
  }

  return (
    <main className="container">
      <h1
        style={{
          color: "red",
          fontSize: "32px",
        }}
      >
        {title}
        {getTitle()}
      </h1>
      <div>
        <textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
        <button>发布</button>
      </div>
    </main>
  );
}

export default App;
