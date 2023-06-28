import {useLoaderData,Form,useActionData} from "react-router-dom";
const ViewPostPage = ()=>{
  const {id,post} = useLoaderData()
  const actionData = useActionData()
  return (
    <div className='text-center'>
      <h1 className="text-6xl text-center p-12 font-bold">{post.title}</h1>
      <p>{post.body}</p>

      <hr className='my-12'/>
      <h2 className='text-2xl font-bold'>Comments</h2>
      <p>{actionData?.id && actionData.body}</p>
      <Form method='post' action={`/posts/${id}`}>
        <textarea
          name='comment'
          className="w-full border border-slate-300 p-4 rounded h-24 my-4"
          placeholder='write a comment'
        />
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">提交</button>
      </Form>
    </div>
  )
}
export default ViewPostPage;
