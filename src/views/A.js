import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
const A = () => {
	return (
		<div style={{display:'flex',flexDirection:'row'}}>
			<div style={{display:"flex",flexDirection:"column"}}>
				<NavLink to='/a/a1'>a1——</NavLink>
				<NavLink to='/a/a2'>a3——</NavLink>
				<NavLink to='/a/a3'>a3——</NavLink>
			</div>
			<div className="content">
				<Outlet/>
			</div>
		</div>
	);
};
export default A;
