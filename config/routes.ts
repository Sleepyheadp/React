const routes = [
  {
    path: "/",
    component: "index",
    title:'首页',
  },
  { path: "/docs", component: "docs",title:'文档' },
  { path: "/demo/:id",component: "demo", title:'demo' },
  {
    path:'/personal',
    component:'personal',
    title:'个人中心',
    routes:[
      {path:'/personal',component:'personal/personalOne',title:'个人中心'},
      {path:'/personal/one',component:'personal/personalOne',title:'个人中心1'},
      {path:'/personal/two',component:'personal/personalTwo',title:'个人中心2'},
    ]
  },
  {
    path:'*',
    component:'notfound',
    title:'404'
  }
]
export default routes;
