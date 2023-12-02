import "./style.css";

function PostListItem({ blog = { author: {} }, children }) {
  return (
    <div className="post">
      <img src={blog.author.avatar} alt="" />
      <div className="postContainer">
        <p className="postContent">{blog.content}</p>
        <div className="postMeta">
          <p className="postAuthor">{blog.author.name}</p>
          <p className="postDate">{blog.publishDate}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default PostListItem;
