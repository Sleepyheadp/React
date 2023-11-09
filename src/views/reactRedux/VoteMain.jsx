import React, { useMemo } from "react";
import { connect } from "react-redux";
const VoteMain = (props) => {
	let { supNum, oppNum, abandonNum } = props;
	let total = supNum + oppNum;
	const ratio = useMemo(() => {
		// 这里面只包含了supNum和total，所以只有这两个变量发生变化时，才会重新计算。不包括oppNum
		if (total > 0) {
			return ((supNum / total) * 100).toFixed(2) + "%";
		}
		return "--";
	}, [supNum, total]);
	return (
		<div className="main">
			<p>支持人数：{supNum}人</p>
			<p>反对人数：{oppNum}人</p>
			<p>弃权人数：{abandonNum}人</p>
			<p>支持比率：{ratio}</p>
		</div>
	);
};
// 第一个参数是mapStateToProps(state)，第二个参数是mapDispatchToProps(action)
export default connect((state) => state.vote, null)(VoteMain);
