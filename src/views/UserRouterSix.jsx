import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/user.css";
const UserRouterSix = () => {
	return (
		<div className="userBox router6">
			<div className="userNav">
				<NavLink to="/user/userD">
					<button>userD</button>
				</NavLink>
				<NavLink to="/user/userE">
					<button>userE</button>
				</NavLink>
				<NavLink to="/user/userF">
					<button>userF</button>
				</NavLink>
			</div>
			<div className="userContent">
				<Outlet />
			</div>
		</div>
	);
};
export default UserRouterSix;
