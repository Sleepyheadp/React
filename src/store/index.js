import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers';
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
let middleware = [reduxThunk,reduxPromise]
if(process.env.NODE_ENV === 'development'){
  middleware.push(reduxLogger)
}
// 2、创建store对象
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  );
export default store;