import React from 'react'
import {NavLink,Outlet} from 'umi'
export default function personal() {
  return (
    <div>
      <div className="navBox">
        <NavLink to='/personal/one'>个人一</NavLink>
        <NavLink to='/personal/two'>个人二</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
