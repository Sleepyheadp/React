import React, {useState, useReducer,useCallback} from 'react'
import ClassAdd from "../components/ClassAdd"

export const ReactHooks = () => {
    // 组件之间state的共享
    const [note,setNote] = useState('')
    // useReducer：集中处理修改状态逻辑
    const [notes,dispatch] = useReducer(notesReducer,[])
    const [noteId,setNoteId] = useState(1);
    function notesReducer(notes,action){
      switch(action.type){
        case 'add': {
          return [
            ...notes,
            {
              id: action.id,
              note: action.note
            }
          ]
        }
        case 'delete':{
          return notes.filter((note)=> note.id !== action.id)
        }
        default :{
          throw Error('没有此action类型')
        }
      }
    }
    function addNote(){
      if(note === ''){
        alert('请输入笔记内容')
      }else{
        console.log(noteId);
        // dispatch中的内容会传递给notesReducer中的action
        dispatch({
          type:'add',
          id:noteId,
          note
        })
        setNoteId((prevNoteId)=>prevNoteId+1)
        // 输入框清空
        setNote('')
      }
    }
    // 获取到state最新的值
    function handleNoteInput(e){
      setNote(e.target.value)
    }
    function deleteNoteById(id){
      dispatch({
        type:'delete',
        id,
      })
    }
  return (
    <div className='item'>
      <h1>ReactHooks</h1>
      <ClassAdd></ClassAdd>
      <div className="useReducer box">
        <h4>useReducer:集中处理状态更新逻辑</h4>
        <h4>案例：添加删除待办事项</h4>
        <ul>
          {notes.map((note)=>{
            return <li key={note.id}>
              {note.id}、{note.note}
              <button onClick={()=>deleteNoteById(note.id)}>删除待办</button>
            </li>
          })}
        </ul>
        <input
          type="text"
          placeholder={'请输入待办事项'}
          value={note}
          onChange={handleNoteInput}
        />
        <button onClick={addNote}>添加待办</button>
      </div>
    </div>
  )
}
