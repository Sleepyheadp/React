import React from 'react'
import WithTheme from "components/WithTheme";
function Button({children,theme}){
  return (
    <button
      style={{backgroundColor:theme === 'dark'?'#000':'#ccc'}}
    >
      {children}
    </button>
  )
}

export default WithTheme(Button)
