import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import qs from "qs";
const B = () => {
	let history = useHistory(),
		location = useLocation(),
		match = useRouteMatch();
	return (
		<div>
			<h1>B组件</h1>
			{/*query传参*/}
			{/*<button*/}
			{/*	onClick={() => {*/}
			{/*		history.push({*/}
			{/*			pathname: "/c",*/}
			{/*			// search:'?name=capoo&age=18'*/}
			{/*			search: qs.stringify({ name: "capoo", age: 18 }),*/}
			{/*		});*/}
			{/*	}}*/}
			{/*>push to C</button>*/}
			{/* 路径传参,两种传参的写法都可以 */}
			{/*<button*/}
			{/*	onClick={()=>{*/}
			{/*		history.push('/c/capoo/18')*/}
			{/*	}}*/}
			{/*>*/}
			{/*	push to C*/}
			{/*</button>*/}
			{/*	隐式传参*/}
			<button onClick={()=>{
				history.push({
					pathname:'/c',
					state:{
						name:'capoo',
						age:18
					}
				})
			}}>跳转到C组件</button>
		</div>
	);
};
export default B;
