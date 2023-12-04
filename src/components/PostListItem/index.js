import './inedx.css'
// 给props设置默认值，防止报错
function PostListItem({author = {},id,content,publishDate,children}){
  function handleWeiboClick(id) {
    // 返回一个函数
    return (e) => {
      console.log(id);
      console.log(e.target);
    };
  }
  return (
    // onclick这种函数事件监听必须要传递一个函数，不能是函数调用的形式
    <div
      className="post"
      onClick={handleWeiboClick(id)}
    >
      {/* 2、||或运算符 设置默认值*/}
      <img src={author.avatar || 'www.demo.com/avatar.jpg'} alt=""/>
      <div className="postContainer">
        {/*3、&&与运算符：替代if语句*/}
        <p className="postContent" >{content.length > 0 && content }</p>
        <div className="postMeta">
          <p className="postAuthor">{author.name}</p>
          <p className="postDate">{publishDate}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default PostListItem;
