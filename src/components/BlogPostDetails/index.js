import "./style.css";
import PropTypes from "prop-types";

function BlogPostDetails({ title, content, likes, onLike, author, tags }) {
  function handleLike() {
    if (onLike) {
      onLike(likes + 1);
    }
  }

  return (
    <div className="blogPostDetails">
      <h2>
        {title} - <span className="type">{typeof title}</span>
      </h2>
      <p>
        {content} - <span className="type">{typeof content}</span>
      </p>
      <div className="likes">
        <button onClick={handleLike}>点赞</button>
        <span>
          {likes} - <span className="type">{typeof likes}</span>
        </span>
      </div>
      <div>
        <p>
          作者：{author.name}，作者简介：{author.description} -{" "}
          <span className="type">{typeof author}</span>
        </p>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
        <span>
          {" "}
          -{" "}
          <span className="type">
            {Object.getPrototypeOf(tags).constructor.name}
          </span>
        </span>
      </div>
    </div>
  );
}

BlogPostDetails.propTypes = {
  title: PropTypes.string,
  onLike: PropTypes.func.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  tags: PropTypes.array,
};

export default BlogPostDetails;
