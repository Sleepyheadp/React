import React from 'react'

function VoteFooter({changeNum}) {
  return (
    <>
      <button className='support' onClick={()=>changeNum('support')}>支持</button>
      <button className='oppose' onClick={()=>changeNum('oppose')}>反对</button>
    </>
  )
}

export default VoteFooter
