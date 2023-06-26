import React from "react";
import Vote from "./views/Vote";
import store from './store'
import {Provider} from 'react-redux'
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
const App = function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Vote />
        </Provider>
      </ConfigProvider>
    </div>
  )
};
export default App;
