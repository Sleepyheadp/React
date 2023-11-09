import vote from "./vote.js";
import personal from "./personal.js";
import demoReducer from "./demoReducer.js";
import { combineReducers } from "redux";
const reducer = combineReducers({
	vote,
	personal,
	demo: demoReducer,
});
export default reducer;
