import React from 'react'
import Son from './Son'
function Fat() {
  const msg = 'Hello world'
  const name = 'capoo'
  const age = 18
  return (
    <>
      <div>Fat</div>
      <Son msg={msg} name={name} age={age} ></Son>
    </>
  )
}

export default Fat