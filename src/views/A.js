import React from "react";
import { Link } from "react-router-dom";
// import { useHistory, useLocation, useParams } from "react-router-dom";
import { Button } from "antd";
import RouterView from "../router";
import routes from "../router/routes";
const A = (props) => {
	// 通过属性获取路由信息
	// console.log("props", props);
	// 通过hooks获取路由信息
	// console.log(
	// 	useHistory(),
	// 	useLocation(),
	// 	useParams()
	// );
	return (
		<div className="flex flex-row">
			<div className="flex justify-center items-center flex-col max-w-5xl">
				<Link to="/a/a1">
					<Button>A1</Button>
				</Link>
				<Link to="/a/a2">
					<Button>A2</Button>
				</Link>
				<Link to="/a/a3">
					<Button>A3</Button>
				</Link>
			</div>
			<div className="mx-20">
				<RouterView routes={routes[1]?.children}></RouterView>
			</div>
		</div>
	);
};
export default A;
