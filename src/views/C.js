import React from "react";
import {useLocation,useParams} from "react-router-dom";
// import qs from "qs";
const C = ()=>{
  // 隐式传参取值
  console.log(useLocation().state)
  // 页面路径传参取值/:id/:name
  // console.log(useParams())
  // query传参取值
  // let query= qs.parse(useLocation().search.substring(1))
  // console.log(query.search) // "?name=capoo&age=18"
  // URLSearchParams:通过这种方式也可以获得传参信息
  // let query2 = new URLSearchParams(useLocation().search)
  // console.log(query2.get('name'))
  // console.log(query2.get('age'))
  return (
    <div>
      <h1>C</h1>
    </div>
  )
}
export default C;
