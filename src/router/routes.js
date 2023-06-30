import { lazy } from "react";
import { Navigate } from "react-router-dom";
const routes = [
	{
		path: "/",
		component: () => <Navigate to="/a" />,
	},
	{
		path: "/",
		name: "a",
		component: lazy(() => import("../views/A")),
		children: [
			{
				path: "/a",
				component: () => <Navigate to="/a/a1" />,
			},
			{
				path: "/a/a1",
				name: "a-a1",
				component: lazy(() => import("../views/a/a1")),
			},
			{
				path: "/a/a2",
				name: "a-a2",
				component: lazy(() => import("../views/a/a2")),
			},
			{
				path: "/a/a3",
				name: "a-a3",
				component: lazy(() => import("../views/a/a3")),
			},
		],
	},
	{
		path: "/b",
		name: "b",
		component: lazy(() => import("../views/B")),
	},
	{
		path: "/c",
		name: "c",
		component: lazy(() => import("../views/C")),
	},
	// {
	// 	path: "*",
	// 	name: "404",
	// 	component: () => {
	// 		return (
	// 			<Navigate
	// 				to={{
	// 					pathname: "/a",
	// 					search: "?from=404",
	// 				}}
	// 			/>
	// 		);
	// 	},
	// },
];
export default routes;
