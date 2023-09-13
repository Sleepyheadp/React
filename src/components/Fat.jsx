import React from 'react'
import Son from './Son'
function Fat() {
  const msg = 'Hello world'
  const name = 'capoo'
  const age = 18
  return (
    <>
      <div>Fat</div>
      <Son msg={msg} name={name} age={age} >
        <div>标题</div>
        <div>内容</div>
        <div>结尾</div>
      </Son>
    </>
  )
}

export default Fat