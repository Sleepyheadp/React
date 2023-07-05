import {createStore} from 'redux';
import reducer from './reducers';
// 2、创建store对象
const store = createStore(
  reducer,
  );
export default store;
