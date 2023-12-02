import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import {Button} from "antd";
const A = () => {
	return (
		<div style={{display:'flex',flexDirection:'row'}}>
			<div style={{display:"flex",flexDirection:"column"}}>
				<NavLink to='/a/a1'><Button>a1</Button></NavLink>
				<NavLink to='/a/a2'><Button>a3</Button></NavLink>
				<NavLink to='/a/a3'><Button>a3</Button></NavLink>
			</div>
			<div className="content">
				<Outlet/>
			</div>
		</div>
	);
};
export default A;
