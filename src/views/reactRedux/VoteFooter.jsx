import React,{useContext} from 'react'
import ThemeContext from '../../utils/ThemeContext'
export const VoteFooter = () => {
  const {store} = useContext(ThemeContext)
  let {supNum,oppNum} = store.getState()
  return (
    <>
      <button 
        onClick={()=>{
          store.dispatch({
            type: 'VOTE__SUP',
          })
        }}
      >支持</button>
      <button
        onClick={()=>{
          store.dispatch({
            type: 'VOTE__OPP',
          })
        }}
      >反对</button>
    </>
  )
}
