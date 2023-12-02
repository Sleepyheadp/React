import "./style.css";

function PostList({ author = {}, content, publishDate, children }) {
  return (
    <div className="post">
      <img src={author.avatar} alt="" />
      <div className="postContainer">
        <p className="postContent">{content}</p>
        <div className="postMeta">
          <p className="postAuthor">{author.name}</p>
          <p className="postDate">{publishDate}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default PostList;
