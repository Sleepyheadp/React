import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import {Button} from "antd";
import "../styles/user.css";
const UserRouterSix = () => {
  return (
    <div className='userBox router6'>
        <div className="userNav">
          <NavLink to='/user/userD'><Button>userD</Button></NavLink>
          <NavLink to='/user/userE'><Button>userE</Button></NavLink>
          <NavLink to='/user/userF'><Button>userF</Button></NavLink>
        </div>
        <div className="userContent">
          <Outlet/>
        </div>
    </div>
  )
}
export default UserRouterSix;
