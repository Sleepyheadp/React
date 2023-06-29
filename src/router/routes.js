import {lazy} from 'react';
const routes =[
  // 设置要匹配的参数
  {
    redirect:true,
    from:'/',
    to:'/a/a1',
    exact:true
  },
  {
    path: '/a',
    name: 'a',
    component: lazy(() => import('../views/A.js')),
    children: [
      {
        redirect:true,
        from:'/a',
        to:'/a/a1',
        exact:true
      },
      {
        path: '/a/a1',
        name: 'a-a1',
        component: lazy(() => import(/* webpackChunkName:"aChild" */'../views/a/A1.js')),
        meta:{}
      },
      {
        path: '/a/a2',
        name: 'a-a2',
        component: lazy(() => import(/* webpackChunkName:"aChild" */'../views/a/A2.js')),
        meta:{}
      },
      {
        path: '/a/a3',
        name: 'a-a3',
        component: lazy(() => import(/* webpackChunkName:"aChild" */'../views/a/A3.js')),
        meta:{}
      }
    ]
  },
  {
    path: '/b',
    name: 'b',
    component: lazy(() => import('../views/B.js')),
  },
  {
    path: '/c/:name?/:id?',
    name: 'c',
    component: lazy(() => import('../views/C.js')),
  },
  {
    path:'*',
    component:lazy(()=>import('../views/a/A1'))
  }
]
export default routes;
