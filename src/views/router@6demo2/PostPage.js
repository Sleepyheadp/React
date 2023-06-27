import {Link,useLoaderData} from "react-router-dom";
const PostPage = ()=>{
  const {posts} = useLoaderData()
  return (
    <div className='text-center'>
      <ul className="list-disc text-left">
        {posts.map((post)=>{
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default PostPage;
