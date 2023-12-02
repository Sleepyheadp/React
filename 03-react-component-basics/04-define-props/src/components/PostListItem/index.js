import "./style.css";

function PostListItem({ blog, msg }) {
  console.log(typeof msg);
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
    </div>
  );
}

export default PostListItem;
