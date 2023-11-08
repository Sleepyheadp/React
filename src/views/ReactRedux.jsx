import React,{useContext} from 'react'
import Vote from './reactRedux/Vote'
import ThemeContext from '../utils/ThemeContext'
import store from '../store/index'
const ReactRedux = () => {
  return (
    <>
      <div>ReduxDemo</div>
      <ThemeContext.Provider
        value={{store}}
      >
        <Vote></Vote> 
      </ThemeContext.Provider>
    </>
  )
}

export default ReactRedux