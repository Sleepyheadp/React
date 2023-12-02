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

  function handleContentInput(e) {
    console.log(e.target.value);
  }

  function handleWeiboClick(id) {
    return (e) => {
      console.log(id);
      console.log(e.target);
    };
  }

  // const handleContentInput = (e) => console.log(e.target.value);

  return (
    <main className="container">
      <h1>欢迎使用本应用 🍂</h1>
      <div>
        <textarea
          onInput={handleContentInput}
          placeholder="写点什么吧..."
          cols="30"
          rows="5"
        ></textarea>
        <button>发布</button>
      </div>
      <div>
        {microBlogs.length > 0 ? (
          microBlogs.map((blog, index) => (
            <div key={blog.id} onClick={handleWeiboClick(blog.id)}>
              <img src={blog.author.avatar} alt="" />
              <div>
                <p>{blog.content}</p>
                <div>
                  <p>{blog.author.name}</p>
                  <p>{blog.publishDate}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>暂无微博</p>
        )}
      </div>
    </main>
  );
}

export default App;
