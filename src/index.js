import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 导入路由所需方法
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Root from './Root'
import PostPage from "./pages/PostPage";
import ViewPostPage from "./pages/ViewPostPage";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    // 下面这些都属于首页的子路由，在页面中通过<Outlet />渲染
    children:[
      {path:'/',element:<HomePage />},
      {path:'/about',element:<AboutPage />},
      {
        path:'/posts',
        element:<PostPage/>,
        loader:async ()=>{
          const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
          return {posts}
        }
      },
      {
        path:'/posts/:id',
        element:<ViewPostPage/>,
        loader: async ({params})=>{
          const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res=>res.json())
          return {
            // 只要是返回的内容都可以通过params传递
            id:params.id,
            post
          }
        },
        action: async ({request})=>{
          const form = await request.formData()
          return {
            id:1000,
            body:form.get('comment'),
          }
        }
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);
