import React from "react";
import Vote from "./views/Vote";
import store from './store'
import {Provider} from 'react-redux'
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
// react-router@6
import {HashRouter} from "react-router-dom";
import HomeHead from "./components/HomeHead";
import RouterView from "./router"

const App = function App() {
  return (
    <div>
      {/*<ConfigProvider locale={zhCN}>*/}
      {/*  <Provider store={store}>*/}
      {/*    <Vote />*/}
      {/*  </Provider>*/}
      {/*</ConfigProvider>*/}
      <HashRouter>
        <HomeHead />
        <div className="content">
          <RouterView />
        </div>
      </HashRouter>;
    </div>
  )
};
export default App;
