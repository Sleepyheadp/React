import "./App.css";

function App() {
  const microBlogs = [
    {
      id: 1,
      author: {
        name: "张小丰",
        avatar: "",
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
    {
      id: 2,
      author: {
        name: "王小玲",
        avatar: "",
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
    {
      id: 3,
      author: {
        name: "李小明",
        avatar: "",
      },
      content:
        "这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
      publishDate: "2022-10-25",
    },
  ];

  return (
    <main className="container">
      <h1>欢迎使用本应用 🍂</h1>
      <div>
        <textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
        <button>发布</button>
      </div>
      <div>
        {microBlogs.map((microBlog) => (
          <div key={microBlog.id}>
            <img src={microBlog.author.avatar} alt="" />
            <div>
              <p>{microBlog.content}</p>
              <div>
                <p>{microBlog.author.name}</p>
                <p>{microBlog.publishDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
