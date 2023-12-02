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

  const headingStyles = {
    fontSize: "3em",
    color: "#00FF00",
  };

  return (
    <main className="container">
      <h1 style={headingStyles}>欢迎使用本应用 🍂</h1>
      <div className="publishBlog">
        <textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
        <button>发布</button>
      </div>
      <div className="postList">
        {microBlogs.length > 0 ? (
          microBlogs.map((blog, index) => (
            <div className="post" key={blog.id}>
              <img src={blog.author.avatar} alt="" />
              <div className="postContainer">
                <p className="postContent">{blog.content}</p>
                <div className="postMeta">
                  <p className="postAuthor">{blog.author.name}</p>
                  <p className="postDate">{blog.publishDate}</p>
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
