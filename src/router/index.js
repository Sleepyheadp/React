import React,{Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
const RouterView = (props)=>{
  let {routes} = props;
  return (
    <Switch>
      {/*switch标签下是匹配的路由，我们通过循环遍历routes更加快捷方便，统一处理*/}
      {routes.map((item,index)=>{
        // 把routes里的各个配置项解构出来
        let {path,component:Component,to,from,exact,redirect} = item,
          config = {}
        // 1、首先判断是否为重定向标签
        if(redirect){
          // 重定向规则（重定向是从/定位to的路径下，所以只取to的值即可）
          // 为什么直接加to属性，因为重定向不需要匹配路径，直接跳转
          config.to = to;
          if(from) config.from = from;
          if(exact) config.exact = true;
          return <Redirect  key={index} {...config}></Redirect>
        }
        // 2、然后处理匹配页面路由的标签 path:'/a' path:'/' path:'*'
        // 「问」为什么不需要对path进行判断？因为/和*的判断值都是true，所以不需要判断
        config.path = path;
        // 一般设置exact属性，是为了精确匹配且值为true，例如：/a和/都匹配，但是我们只想匹配/a
        if(exact) config.exact = true;
        // 3、最后处理路由对应的组件
        return <Route
          key={index}
          {...config}
          render={(props)=>{
            // 统一处理路由守卫，当某个路由匹配后可以做一些事情
            // 例如：登录验证
          return(
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
