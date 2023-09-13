import React from 'react'

function VoteFooter(props) {
  let {changeNum,changeManager} = props
  return (
    <>
      <button className='support' onClick={()=>changeNum('support')}>支持</button>
      <button className='oppose' onClick={()=>changeNum('oppose')}>反对</button>
      <button onClick={()=>changeManager('bugCat')}>改发起人</button>
    </>
  )
}

export default VoteFooter
