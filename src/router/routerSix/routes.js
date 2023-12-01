import { lazy } from "react";
import { Navigate } from "react-router-dom";
const routes = [
	{
		path: "/",
		component: () => <Navigate to="/basicgrammer" />,
	},
	{
		path: "/user",
		name: "user",
		component: lazy(() => import("../../views/UserRouterSix")),
		children: [
			{
				path: "/user",
				component: () => <Navigate to="/user/userD" />,
			},
			{
				path: "/user/userD",
				name: "userD",
				component: lazy(() => import("../../components/Users/router6/UserD")),
			},
			{
				path: "/user/userE/:name?/:age?",
				name: "userE",
				component: lazy(() => import("../../components/Users/router6/UserE")),
			},
			{
				path: "/user/userF",
				name: "userF",
				component: lazy(() => import("../../components/Users/router6/UserF")),
			},
		],
	},
	{
		path: "/basicgrammar",
		name: "basicgrammar",
		component: lazy(() => import("../../views/ReactBasicGrammar")),
	},
	{
		path: "/compdevbasic",
		name: "compdevbasic",
		component: lazy(() => import("../../views/ReactCompDevBasic")),
	},
	{
		path: "/hooks",
		name: "hooks",
		component: lazy(() => import("../../views/ReactHooks")),
	},
	{
		path: "/redux",
		name: "redux",
		component: lazy(() => import("../../views/ReactRedux")),
	},
	{
		path: "/mobx",
		name: "mobx",
		component: lazy(() => import("../../views/MobxDemo")),
	},
	{
		path: "*",
		component: () => <Navigate to="/basicgrammar" />,
	},
];
export default routes;
