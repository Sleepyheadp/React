import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
// 中间件
import reduxLogger from "redux-logger"; // dispatch派发action前后打印日志
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
let middleware = [reduxPromise, reduxThunk];
if (process.env.NODE_ENV === "development") {
	middleware.push(reduxLogger);
}
// 创建store公共容器
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
