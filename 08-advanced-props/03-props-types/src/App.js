import { useState } from "react";
import BlogPostDetails from "./components/BlogPostDetails";
import "./App.css";

function App() {
  const [blogPost, setBlogPost] = useState({
    title: "React Hooks",
    content: "React Hooks 是 React 16.8 版本新增的特性",
    likes: 10,
    author: {
      name: "张三",
      description: "张三是一名前端工程师",
    },
    tags: ["前端", "React", "教程"],
  });

  function handleLike(likes) {
    setBlogPost({
      ...blogPost,
      likes,
    });
  }

  return (
    <main className="container">
      <BlogPostDetails
        // 1. 字符串类型
        title={blogPost.title}
        content={blogPost.content}
        // 2. 数字类型
        likes={blogPost.likes}
        // 3. 函数类型
        onLike={handleLike}
        // 4. 对象类型
        author={blogPost.author}
        // 5. 数组类型
        tags={blogPost.tags}
        // 6. 或者可以使用 spread 展开
        // {...blogPost}
        // onLike={handleLike}
      />
    </main>
  );
}

export default App;
