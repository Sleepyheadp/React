import {createStore} from 'redux'
// 修改store容器中的公共状态
let initial = {
  supNum:10,
  oppNum:5,
}
// initial设置初始值（没有传值时的默认值）
const reducer = function reducer(state = initial,action){
  // 重新取一份state，改变完后再重新赋值回去，不直接修改容器中的状态
  state = {...state}
  switch(action.type){
    case 'VOTE__SUP':
      state.supNum++;
      break;
    case 'VOTE__OPP':
      state.oppNum++;
      break;
    default:
  }
  return state;
}
// 创建store公共容器
const store = createStore(reducer)
export default store;