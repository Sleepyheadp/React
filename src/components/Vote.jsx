import React,{useState,useCallback,createContext} from 'react'
import VoteMiddle  from  './VoteMiddle'
import VoteFooter from './VoteFooter'
import ThemeContext from "../utils/ThemeContext"
function Vote() {
  const [supportNum, setSupportNum] = useState(0)
  const [opposeNum, setOpposeNum] = useState(0)
  // context基于上下文通信
  const [manager,setManager] = useState('capoo')
  const [cost,setCost] = useState(1999)
  const changeNum = useCallback((type)=>{
    if(type === 'support'){
      setSupportNum(supportNum + 1)
      return
    }
    setOpposeNum(opposeNum + 1)
  },[supportNum,opposeNum])
  return (
    // 传递给子组件数据
    <ThemeContext.Provider
      value={{
        manager,
        cost,
      }}
    >
      <div>投票总数：{supportNum + opposeNum}</div>
      <VoteMiddle
        supportNum={supportNum}
        opposeNum={opposeNum}
      ></VoteMiddle>
      <VoteFooter
        changeNum={changeNum}
      ></VoteFooter>
    </ThemeContext.Provider>

  )
}

export default Vote
