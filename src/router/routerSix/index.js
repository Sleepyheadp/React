import React, {Suspense} from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import routes from './routes'
// 封装一个统一渲染的路由组件
const Element = (props) => {
  let {component:Component} = props;
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();
  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    ></Component>
  )
}
const createRoute = (routes)=>{
  return routes.map((item,index)=>{
    let {path,children} = item;
    return (
      <Route
        key={index}
        path={path}
        element={<Element {...item}/>}>
        {Array.isArray(children)?createRoute(children):null}
      </Route>
    )
  })
}
export default function RouterView(){
  return (
    <Suspense fallback={<div>loading...</div>}>
      {/*Routes相当于5中的switch*/}
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  )
}
// 创建withRouter（一些路由的信息让非路由组件也能获取到）
export const withRouter = (Component) => {
  return function HOC(props) {
    // 提前获取路由信息，作为属性传递给Component
    const navigate = useNavigate(),
      location = useLocation(),
      params = useParams(),
      [usp] = useSearchParams();
    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
        usp={usp}
      ></Component>
    );
  };
};
