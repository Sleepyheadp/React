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
        title={blogPost.title}
        content={blogPost.content}
        likes={blogPost.likes}
        onLike={handleLike}
        author={blogPost.author}
        tags={blogPost.tags}
      />
    </main>
  );
}

export default App;
