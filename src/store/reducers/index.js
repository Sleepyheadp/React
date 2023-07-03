import {combineReducers} from 'redux';
import vote from "./voteReducer"
import personal from "./personalReducer"
import task from "./taskReducer"
const reducer = combineReducers({
  vote,
  personal,
  task
})
export default reducer;
