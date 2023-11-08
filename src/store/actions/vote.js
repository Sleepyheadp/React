// 因为页面中导出多个，*代表导入全部，as是起别名
import * as TYPES from "../actionTypes";
const vote = {
	support() {
		return {
			type: TYPES.VOTE_SUP,
		};
	},
	oppose() {
		return {
			type: TYPES.VOTE_OPP,
		};
	},
};
export default vote;
