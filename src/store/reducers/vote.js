import _ from "../../utils/utils";
import * as TYPES from "../action-types";
const initial = {
	supNum: 1,
	oppNum: 2,
	abandonNum: 0,
	num: 0,
};
const vote = (state = initial, action) => {
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
		case TYPES.VOTE_ABANDON:
			state.abandonNum++;
			break;
		default:
	}
	return state;
};
export default vote;
