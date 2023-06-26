import {createStore} from "redux";
// 1、创建reducer函数
let initial = {
  supNum:10,
  oppNum:5
}
const reducer = (state = initial, action) => {
    state = {...state};
    switch (action.type) {
      // return的内容会整体替换store容器中的状态信息
        case 'VOTE_SUP':
            state.supNum++;
            break;
        case 'VOTE_OPP':
            state.oppNum++;
            break;
        default:
    }
    return state;
}
// 2、创建store对象
const store = createStore(reducer);
export default store;
