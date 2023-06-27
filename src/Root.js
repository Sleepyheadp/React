import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
const Root = ()=>{
  return (
    <div className="min-h-screen flex justify-center items-center flex-col max-w-5xl mx-auto">
      <ul className="flex bg-slate-200 rounded px-8 py-4 text-lg w-full gap-x-8 justify-center">
        <li>
          <NavLink
            to='/'
            className={
              ({isActive})=> `${isActive? 'text-blue-800 font-bold':'text-blue-500'} hover:text-blue-700`
            }
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={
              ({isActive})=> `${isActive? 'text-blue-800 font-bold':'text-blue-500'} hover:text-blue-700`
            }
          >About Page</NavLink>
        </li>
        <li>
          <NavLink
            to='/posts'
            className={
              ({isActive})=> `${isActive? 'text-blue-800 font-bold':'text-blue-500'} hover:text-blue-700`
            }
          >Posts</NavLink>
        </li>
      </ul>
      {/* 我们在路由配置文件中配置的子路由都会在这里渲染 */}
      <Outlet />
    </div>
  )
}
export default Root;
