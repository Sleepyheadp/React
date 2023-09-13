import React from 'react'
import {useState} from 'react'
// (props)
function Son({msg,name,age,children}) {
  let [count,setCount] = useState(0)
  function addCount(){
    // 为什么count++不行?
    // 因为count++是先取值再加1，而setCount是异步的，所以取到的值是旧的
    // 为什么setCount(count+1)可以?
    // 因为setCount是异步的，所以取到的值是旧的，但是count+1是同步的，所以取到的值是新的
    setCount(count+1)
  }
  return (
    <>
      {count}
      <button onClick={addCount}>count++</button>
      <div>Son:{msg},{name},{age}</div>
      <div>
        {children}
      </div>
    </>
  )
}
// 属性校验：defineProps
Son.defineProps = {
  msg: String,
  name: String,
  age: Number
}
// prop-types 属性校验
// Son.propTypes = {
//   msg: PropTypes.string,
//   name: PropTypes.string,
//   age: PropTypes.number
// }

export default Son