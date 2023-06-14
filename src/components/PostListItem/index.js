import './inedx.css'

function PostListItem({microBlog,code}){
  console.log('code：',code)
  function handleWeiboClick(id,) {
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

      onClick={handleWeiboClick(microBlog.id)}
    >
      {/* 2、||或运算符 设置默认值*/}
      <img src={microBlog.author.avatar || 'www.demo.com/avatar.jpg'} alt=""/>
      <div className="postContainer">
        {/*3、&&与运算符：替代if语句*/}
        <p className="postContent" >{microBlog.content.length > 0 && microBlog.content }</p>
        <div className="postMeta">
          <p className="postAuthor">{microBlog.author.name}</p>
          <p className="postDate">{microBlog.publishDate}</p>
        </div>
      </div>
    </div>
  )
}

export default PostListItem;
