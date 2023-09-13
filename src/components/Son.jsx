import React from 'react'

// (props)
function Son({msg,name,age}) {
  return (
    <>
      <div>Son:{msg},{name},{age}</div>
    </>
  )
}
// 属性校验：defineProps
Son.defineProps = {
  msg: String,
  name: String,
  age: Number
}
// prop-types 属性校验
// Son.propTypes = {
//   msg: PropTypes.string,
//   name: PropTypes.string,
//   age: PropTypes.number
// }

export default Son