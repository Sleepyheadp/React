import vote from "./vote.js";
import personal from "./personal.js";
import { combineReducers } from "redux";
const reducer = combineReducers({
	vote,
	personal,
});
export default reducer;
