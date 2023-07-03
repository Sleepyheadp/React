import React from "react";
import Vote from "./views/Vote";
import store from './store'
import {Provider} from 'react-redux'
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
import Home from "./components/Home";
import RouterView from './router'
import {HashRouter} from "react-router-dom";
import Task from "./views/Task";
const App = function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <HashRouter>
            <Vote />
            <Home/>
            <RouterView/>
            <Task/>
          </HashRouter>
        </Provider>
      </ConfigProvider>
    </div>
  )
};
export default App;
