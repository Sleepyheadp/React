import React, {Suspense} from "react";
import {Route, Routes, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import routes from "./routes";
// 封装函数，匹配路由
// 封装一个统一渲染的路由组件「」
const Element = (props)=>{
	// 从props中解构出component，重命名为Component，react判断路由组件首字母大写，所以这里要重命名
	let {component:Component} = props;
	const navigate = useNavigate(),
		location = useLocation(),
		params = useParams(),
		[usp] = useSearchParams();
	return <Component navigate={navigate} location={location} params={params} usp={usp}></Component>
}
const createRoute = (routes) => {
	return (
		routes.map((item,index) => {
			// 循环遍历，返回多个Route路由
			let {path, children} = item;
			// 每一次路由匹配成功，不直接渲染我们设定的组件，而是渲染Element；在Element做一些特殊处理后，再去渲染我们真实要渲染的组件！！
			return <Route key={index} path={path} element={<Element {...item}/>}>
				{/* 基于递归的方式，绑定子集路由*/}
				{Array.isArray(children)?createRoute(children):null}
			</Route>
		})
	)
}
// 路由容器
export default function RouterView(){
	return (
		// 为什么通过Suspense包裹Routes，因为Routes中的Route是异步加载的，所以需要Suspense包裹
		<Suspense fallback={<div>loading...</div>}>
			{/*// v6版本的路由，不需要使用Switch，直接使用Routes即可，Routes包裹Route渲染路由*/}
			<Routes>{createRoute(routes)}</Routes>
		</Suspense>
	);
};
// 创建withRouter
export const withRouter = (Component) => {
	return function HOC(props){
		// 提前获取路由信息，作为属性传递给Component
		const navigate = useNavigate(),
			location = useLocation(),
			params = useParams(),
			[usp] = useSearchParams();
		return <Component {...props} navigate={navigate} location={location} params={params} usp={usp}></Component>
	}
}
