/* personal版块下的reducer */
import _ from "../../utils/utils";
import * as TYPES from "../actionTypes";

const initial = {
	num: 100,
	info: null,
};
export default function personal(state = initial, action) {
	state = _.clone(true, state);
	switch (action.type) {
		case TYPES.PERSONAL_INFO:
			state.info = action.payload;
			break;
		default:
	}
	return state;
}
