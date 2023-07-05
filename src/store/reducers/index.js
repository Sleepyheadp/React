import {combineReducers} from 'redux';
import vote from "./voteReducer"
import personal from "./personalReducer"
const reducer = combineReducers({
  vote,
  personal
})
export default reducer;
