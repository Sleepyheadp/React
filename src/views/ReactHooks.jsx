import React, {useState, useReducer,useEffect,useLayoutEffect,useRef} from 'react'
import ClassAdd from "../components/ClassAdd"

export const ReactHooks = () => {
  // 组件之间state的共享
  const [note,setNote] = useState('')
  // useReducer：集中处理修改状态逻辑
  const [notes,dispatch] = useReducer(notesReducer,[])
  const [noteId,setNoteId] = useState(1);
  // 函数组件累加「useState的使用」
  const [number,setNumber] = useState(0)
  // 模拟异步操作「useEffect的使用」
  const [asyncData,setAsyncData] = useState(['--'])
  // 获取DOM元素的宽高「useLayoutEffect的使用」
  const getDomInfoRef = useRef(null)
  const [domInfo,setDomInfo] = useState({})
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
  function handleNoteInput(e){
    setNote(e.target.value)
  }
  function deleteNoteById(id){
    dispatch({
      type:'delete',
      id,
    })
  }
  // 模拟异步操作
  const queryData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['a', 'b', 'c']);
      }, 2000);
    });
  };
  useEffect(()=>{
    // 立即执行函数
    (async function getText(){
      const data = await queryData();
      setAsyncData(data)
    })()
  },[])
  useLayoutEffect(()=>{
    const width = getDomInfoRef.current.clientWidth
    const height = getDomInfoRef.current.clientHeight
    console.log(width,height);
    setDomInfo({width,height})
  },[getDomInfoRef])
  return (
    <div className='item'>
      <h1>ReactHooks</h1>
      <div className="useState box">
        <h4>useState：类组件实现动态累加</h4>
        <ClassAdd></ClassAdd>
        <div>
          {number}<button onClick={()=>{ setNumber(number+1)}}>函数组件累加</button>
        </div>
      </div>
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
      <div className="useEffect box">
        <h4>useEffect:在函数组件中使用生命周期函数，处理副作用（异步）</h4>
        两秒后渲染数据：{asyncData}
        <h4>useLayoutEffect:在DOM更新之后立即执行的钩子函数，适用于需要对DOM立即操作的场景</h4>
        <div className='boxInfo' ref={getDomInfoRef}>DOM信息:宽度{domInfo.width}，高度{domInfo.height}</div>
      </div>
      <div className="useRef createRef box">
        <h4>useRef/createRef都是用于获取组件的实例</h4>
        <div>useRef:在函数组件中使用,createRef:在类组件中使用</div>
        <div>forwardRef:实现ref转发「获取子组件内部的某个元素」</div>
      </div>
    </div>
  )
}
