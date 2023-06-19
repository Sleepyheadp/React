import React, {useState} from "react";
import "./style.css";

function AddNote({notes}) {
  const [note, setNote] = useState([])
  function handleAddNote(e){
    e.preventDefault()
    setNote({...notes,note})
  }
  function handleTitle(){

  }
  function handleContent(){

  }
  return (
    <div className="addNote">
      <h2>添加新笔记</h2>
      <form>
        <input type="text" onChange={handleTitle}  placeholder="请输入笔记标题" />
        <textarea rows="6" onChange={handleContent} placeholder="请输入笔记内容"></textarea>
        <button type="submit" onClick={handleAddNote}>添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
