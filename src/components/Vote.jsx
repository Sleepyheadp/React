import React,{useState,useCallback} from 'react'
import VoteMiddle  from  './VoteMiddle'
import VoteFooter from './VoteFooter'
function Vote() {
  const [supportNum, setSupportNum] = useState(0)
  const [opposeNum, setOpposeNum] = useState(0)
  const changeNum = useCallback((type)=>{
    if(type === 'support'){
      setSupportNum(supportNum + 1)
      return
    }
    setOpposeNum(opposeNum + 1)
  },[supportNum,opposeNum])
  return (
    <>
      <div>投票总数：{supportNum + opposeNum}</div>
      <VoteMiddle
        supportNum={supportNum}
        opposeNum={opposeNum}
      ></VoteMiddle>
      <VoteFooter
        changeNum={changeNum}
      ></VoteFooter>
    </>

  )
}

export default Vote
