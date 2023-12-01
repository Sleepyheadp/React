import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
// redux中间件
import reduxLogger from "redux-logger"; // dispatch派发action前后打印日志
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
// 导入redux-saga
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

let middleware = [reduxPromise, reduxThunk];
// 开发环境下打印日志
if (process.env.NODE_ENV === "development") {
	middleware.push(reduxLogger);
}

const sagaMiddleware = createSagaMiddleware(saga);
// 创建store公共容器
const store = createStore(
	reducer,
	applyMiddleware(...middleware, sagaMiddleware)
);
export default store;
