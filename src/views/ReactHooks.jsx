import React, {useState, useReducer,useEffect,useLayoutEffect,useRef} from 'react'
import ClassAdd from "../components/ClassAdd"
import {Button, Input} from "antd";

export default function ReactHooks(){
  // 组件之间state的共享
  const [note,setNote] = useState('')
  // useReducer：集中处理修改状态逻辑
  const [notes,dispatch] = useReducer(notesReducer,[]) // 待办事项列表
  const [noteId,setNoteId] = useState(1); // 待办事项id
  // 函数组件累加「useState的使用」
  const [number,setNumber] = useState(0)
  // 模拟异步操作「useEffect的使用」
  const [asyncData,setAsyncData] = useState(['--'])
  // 获取DOM元素的宽高「useLayoutEffect的使用」
  const getDomInfoRef = useRef(null)
  const [domInfo,setDomInfo] = useState({})
  // reducer函数
  function notesReducer(notes,action){
    switch(action.type){
      case 'add': {
        return [
          // 每次添加待办事项都要取出notes，然后再添加新的待办事项
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
  // useReducer：添加删除待办案例
  // 将待办输入框的值赋值给note
  function handleNoteInput(e){
    setNote(e.target.value)
  }
  // 添加待办案例
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
      // 点击添加待办后，清空输入框
      setNote('')
    }
  }
  // 删除待办案例
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
    // console.log(width,height);
    setDomInfo({width,height})
  },[getDomInfoRef])
  return (
    <div className='item'>
      <h1>ReactHooks</h1>
      <div className="useState box">
        <h4>useState:类组件实现动态累加</h4>
        <ClassAdd></ClassAdd>
        <div>
          {number}<Button onClick={()=>{ setNumber(number+1)}}>函数组件累加</Button>
        </div>
      </div>
      <div className="useReducer box">
        <h4>useReducer:集中处理状态更新逻辑</h4>
        <h4>案例：添加删除待办事项</h4>
        <ul>
          {notes.map((note,index)=>{
            return <li key={note.id}>
              {index + 1}、{note.note}
              <Button onClick={()=>deleteNoteById(note.id)}>删除待办</Button>
            </li>
          })}
        </ul>
        <Input
          type="text"
          placeholder={'请输入待办事项'}
          value={note}
          onChange={handleNoteInput}
        />
        <Button onClick={addNote}>添加待办</Button>
      </div>
      <div className="useEffect box">
        <h4>useEffect:在函数组件中使用生命周期函数，处理副作用（异步）</h4>
        两秒后渲染数据：{asyncData}
        <h4>useLayoutEffect:在DOM更新之后立即执行的钩子函数,适用于需要对DOM立即操作的场景</h4>
        <div className='boxInfo' ref={getDomInfoRef}>DOM信息:宽度{domInfo.width}，高度{domInfo.height}</div>
      </div>
      <div className="useRef createRef box">
        <h4>useRef/createRef都是用于获取组件的实例</h4>
        <div>useRef:在函数组件中使用,createRef:在类组件中使用</div>
        <div>forwardRef:实现ref转发「获取子组件内部的某个元素」</div>
      </div>
      <div className="useImperativeHand box">
        <h4>useImperativeHandle</h4>
        <div>基于`forwardRef`实现ref转发的同时，获取函数子组件主动暴露给父组件的状态或者方法</div>
      </div>
      <div className="useMemo box">
        <h4>useMemo/memo</h4>
        <div>useMemo:缓存函数，避免每次渲染都重新创建函数</div>
      </div>
      <div className="useCallback box">
        <h4>useCallback</h4>
        <div>它允许你在重新渲染之间缓存函数定义</div>
      </div>
    </div>
  )
}
