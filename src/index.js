import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// start react-router-dom@6-CodingStartup
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './views/router@6demo/HomePage'
import AboutPage from './views/router@6demo/AboutPage'
import Home from './views/router@6demo/Home' // 首页内容（不是路由
import PostPage from "./views/router@6demo/PostPage";
import ViewPostPage from "./views/router@6demo/ViewPostPage";
// end react-router-dom@6-CodingStartup
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
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
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
