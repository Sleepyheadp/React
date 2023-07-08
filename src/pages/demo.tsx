import React from 'react'
import { withRouter,useParams,useLocation } from 'umi'

// // 通过useParams获取路由参数
// const demo = ()=> {
//   // 1、通过useParams获取路由参数
//   const params = useParams()
//   // console.log(params)
//   // 2、通过useLocation获取路由参数（取pathname）
//   const location = useLocation()
//   // console.log(location.pathname) // /demo/100
//   //
//   return (
//     <div>demo</div>
//   )
// }
// export default demo;


const demo = ({match})=> {
  // console.log(match.params);
  return (
    <div>demo</div>
  )
}
export default withRouter(demo);