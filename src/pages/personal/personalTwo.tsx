import { withRouter,createSearchParams,useLocation } from 'umi'
// 这里的location是高阶组件withRouter传递过来的，用于获取路由信息
const personalTwo = ({location})=> {
  // console.log(location); // "?id=1&name=capoo1"

  // 通过js内置的URLSearchParams对象获取参数
  // const usp = new URLSearchParams(location.search)
  // console.log(usp.get('id'));
  // console.log(usp.get('name'));

  // 通过umi内置的createSearchParams对象获取参数
  // const csp = createSearchParams(location.search)
  // console.log(csp.get('id'));
  // console.log(csp.get('name'));

  // 通过umi内置的useLocation对象获取参数
  // console.log(useLocation().search); // 等同于上面的location.search
  

  return (
    <div>personalTwo</div>
  )
}
export default withRouter(personalTwo);
