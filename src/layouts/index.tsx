import { NavLink, Outlet } from 'umi';
import './index.less';

export default function Layout() {
  return (
    <div className='content'>
      <div className="navBox">
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/docs'>文档</NavLink>
        <NavLink to='/demo/100'>demo传参页</NavLink>
        <NavLink to='/personal/one'>个人中心</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
