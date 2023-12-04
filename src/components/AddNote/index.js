import React, {useState} from "react";
import "./style.css";
function AddNote({onAddNote}) {
  const [title,setTitle] = useState()
  const [content,setContent] = useState()

  function handleSubmit(e){
    e.preventDefault()
    onAddNote({title,content})
    setTitle('')
    setContent('')
  }

  return (
    <div className="addNote">
      <h2>添加新笔记</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="请输入笔记标题"
        />
        <textarea
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          rows="6"
          placeholder="请输入笔记内容"
        ></textarea>
        <button type="submit" >添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
