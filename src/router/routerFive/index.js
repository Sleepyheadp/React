import React,{Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
const RouterView = (props)=>{
  let {routes} = props;
  return (
    <Switch>
      {routes.map((item,index)=>{
        let {path,component:Component,to,from,exact,redirect} = item,
          config = {}
        // 首先判断是否为重定向标签
        if(redirect){
          // 重定向规则
          // 为什么直接加to属性，因为重定向不需要匹配路径，直接跳转
          config = {to}
          if(from) config.from = from;
          if(exact) config.exact = true;
          return <Redirect  key={index} {...config}></Redirect>
        }
        // 为什么加path属性，因为Route组件需要匹配路径
        config = {path}
        if(exact) config.exact = true;
        return <Route key={index} {...config} render={(props)=>{
          // 统一处理路由守卫，当某个路由匹配后可以做一些事情
          // 例如：登录验证
          return(
            // Suspense组件是为了解决懒加载组件的闪屏问题,就是在组件加载完成之前，先显示一个loading
            <Suspense fallback={<div>loading...</div>}>
              <Component  {...props}/>
            </Suspense>
          )
        }}></Route>
      })}
    </Switch>
  )
}
export default RouterView;
