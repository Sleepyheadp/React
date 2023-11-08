import _ from "../../utils/utils";
import * as TYPES from "../actionTypes";
const initial = {
	supNum: 1,
	oppNum: 2,
	num: 0,
};
export default function vote(state = initial, action) {
	// 拷贝一份state，不要直接修改原state
	state = _.clone(true, state);
	// 根据action的type值，修改state
	switch (action.type) {
		case TYPES.VOTE_SUP:
			state.supNum++;
			break;
		case TYPES.VOTE_OPP:
			state.oppNum++;
			break;
		default:
	}
	return state;
}
