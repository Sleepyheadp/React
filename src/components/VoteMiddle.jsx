import React,{useMemo,useContext} from 'react'
import ThemeContext from "../utils/ThemeContext"

function VoteMiddle(props) {
  let {supportNum,opposeNum} = props
  let {manager,cost} = useContext(ThemeContext)
  // 基于useMemo实现复杂逻辑的缓存计算
  let ratio = useMemo(()=>{
    let ratio = '--'
    let total = supportNum + opposeNum
    if(total > 0){
      ratio =  (supportNum / (supportNum + opposeNum) * 100).toFixed(2)
      return ratio + '%'
    }
  },[supportNum,opposeNum])
  return (
    <>
      <p>支持票数:{supportNum}</p>
      <p>反对票数:{opposeNum}</p>
      <p>支持比率:{ratio}</p>
      <p>发起人:{manager}</p>
      <p>活动经费:{cost}</p>
    </>
  )
}

export default VoteMiddle
