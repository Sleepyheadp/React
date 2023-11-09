// 因为页面中导出多个，*代表导入全部，as是起别名
import * as TYPES from "../actionTypes";
// 异步操作延迟两秒执行
const delay = (interval = 2000) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("delay-异步操作2s后执行");
			resolve("delay异步获取的数据");
		}, interval);
	});
};
const vote = {
	// 方式一：async await写法(redux-promise中间件写法？)
	async abandon() {
		await delay();
		return {
			type: TYPES.VOTE_ABANDON,
		};
	},
	// 方式二：redux-thunk中间件写法
	support() {
		return async (dispatch, getState) => {
			await delay();
			// 手动派发action
			dispatch({
				type: TYPES.VOTE_SUP,
			});
		};
	},
	// 方式三：redux-promise中间件写法
	oppose() {
		return {
			type: TYPES.VOTE_OPP,
			payload: delay().then((res) => {
				return {
					// 这里可以放置你想在Promise解析完成后传递的数据
					res,
				};
			}),
		};
	},
};
export default vote;
