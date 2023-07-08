import { NavLink, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div>
      <div className="navBox">
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/docs'></NavLink>
        <NavLink to='/demo/100'>demo传参页</NavLink>
        <NavLink to='/personal'>个人中心</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
