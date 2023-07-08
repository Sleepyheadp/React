import { matchRoutes } from 'umi';

// 在初始加载和路由切换时做一些事情。
export function onRouteChange({
    location,  //当前路由的location对象
    clientRoutes,  //当前匹配的路由配置项
    routes,  //路由配置项
    action,  //动作类型，push、replace、pop
    basename,  //路由的base路径
    isFirst,  // 是否是第一次加载
  }) {
    console.log(clientRoutes);
    
    // 示例：拿到当前路由的title，设置到document.title上
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  console.log(route.title);
  
  if (route) {
    document.title = route.title || '';
  }
}