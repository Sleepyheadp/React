import React,{useMemo} from 'react'

function VoteMiddle(props) {
  let {supportNum,opposeNum} = props
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
    </>
  )
}

export default VoteMiddle
