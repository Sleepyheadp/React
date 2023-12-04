import React from 'react'
import {Button} from "antd";

function VoteFooter(props) {
  let {changeNum,changeManager} = props
  return (
    <>
      <Button className='support' onClick={()=>changeNum('support')}>支持</Button>
      <Button className='oppose' onClick={()=>changeNum('oppose')}>反对</Button>
      <Button onClick={()=>changeManager('bugCat')}>改发起人</Button>
    </>
  )
}

export default VoteFooter
