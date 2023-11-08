import React, { useContext } from "react";
import Vote from "./reactRedux/Vote";
import store from "../store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
const ReactRedux = () => {
	return (
		<>
			<ConfigProvider locale={zhCN}>
				<div>ReduxDemo</div>
				<Provider store={store}>
					<Vote></Vote>
				</Provider>
			</ConfigProvider>
		</>
	);
};

export default ReactRedux;
