import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'antd';
import {withRouter} from 'react-router-dom';

// const HomeHead = (props)=>{
//   console.log('props',props);
//   console.log('history',useHistory());
//   return (
//     <>
//       <Link to='/'><Button>A</Button></Link>
//       <Link to='/b'><Button>B</Button></Link>
//       <Link to='/c'><Button>C</Button></Link>
//     </>
//   )
// }
/* 「问题」如果当前组件是一个类组件，在HashRouter内，但是并没有经过Route匹配渲染，该如何获取路由信息？
** 「解决方案」基于函数高阶组件，自己包裹一层进行处理
**  其实就是在外层包裹了函数组件
**  在react@5版本中提供给了一个高阶组件 withRouter，可以直接获取路由信息
*/
// 类组件
class HomeHead extends React.Component{
  render(){
    // 这里的this.props就是路由信息，怎么获取的？
    // 通过withRouter高阶组件包裹，就可以获取到路由信息
    // console.log('props',this.props);
    return (
    <div>
      <Link to='/'><Button>A</Button></Link>
      <Link to='/b'><Button>B</Button></Link>
      <Link to='/c'><Button>C</Button></Link>
    </div>
    )
  }
}
// handle的作用等价于withRouter
// const handle = (Component)=>{
//   return function Hoc(props){
//     // props为调用组件时传递的属性
//     console.log(props);
//     // hook函数
//     console.log('history',useHistory());
//     return <Component {...props} history={useHistory()} useLocation={useLocation()}  useRouteMatch={useRouteMatch()}/>
//   }
// }
export default withRouter(HomeHead);
