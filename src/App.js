import "./App.css";
// 导入路由中使用的组件
import { HashRouter } from "react-router-dom";
import routes from "./router/routes";
import RouterView from "./router/index";
import HomeHead from "./components/HomeHead";
function App() {
	return (
		// 基于HashRouter组件实现路由
		// 只要在HashRouter/BrowserRouter中渲染的组件都可以获取到路由信息
		// 只有基于Route渲染的组件才能通过props获取到路由信息
		<HashRouter>
				<HomeHead id={10} />
			{/* 组件内容 */}
			{/*<div className="content">*/}
				<RouterView routes={routes} />
			{/*</div>*/}
		</HashRouter>
	);
}
export default App;
