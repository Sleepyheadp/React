import React, { Suspense } from "react";
import { Route, Routes, useNavigate, useParams, useSearchParams, useLocation, useMatch } from 'react-router-dom';
import routes from "./routes";

// 渲染内容的特殊处理
const Element = function Element(props) {
  let { component: Component, path } = props,
    options = {
      navigate: useNavigate(),
      params: useParams(),
      query: useSearchParams()[0],
      location: useLocation(),
      match: useMatch(path)
    };
  return <Component {...options} />;
};

// 递归创建路由规则
const createRoute = function createRoute(routes) {
  return <>
    {routes.map((item, index) => {
      return <Route key={index} path={item.path} element={<Element {...item} />}>
        {item.children ? createRoute(item.children) : null}
      </Route>;
    })}
  </>;
};

// 路由表管控
const RouterView = function RouterView() {
  return <Suspense fallback={<>正在加载中...</>}>
    <Routes>
      {createRoute(routes)}
    </Routes>
  </Suspense>;
};
export default RouterView;
