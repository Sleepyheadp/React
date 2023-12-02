import { useEffect, useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "学习 React",
    content: "这是一篇关于学习 React 的文章",
  },
  {
    id: 2,
    title: "学习 Hook",
    content: "这是一篇关于学习 Hook 的文章",
  },
  {
    id: 3,
    title: "学习 Redux",
    content: "这是一篇关于学习 Redux 的文章",
  },
];

function App() {
  const [id, setId] = useState(1);
  return (
    <main className="container">
      <div>
        <PostItem id={id} />
        <div>
          <button onClick={() => setId(1)}>1</button>{" "}
          <button onClick={() => setId(2)}>2</button>{" "}
          <button onClick={() => setId(3)}>3</button>
        </div>
      </div>
    </main>
  );
}

function PostItem({ id }) {
  const [postItem, setPostItem] = useState({});

  useEffect(() => {
    let cancelled = false;
    setTimeout(() => {
      if (!cancelled) {
        setPostItem(data[id - 1]);
      }
    }, 3000);

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div>
      <h2>{postItem.title}</h2>
      <p>{postItem.content}</p>
    </div>
  );
}

export default App;
