import React from "react";
import { Button } from "antd";
import action from "../../store/actions";
import { connect } from "react-redux";
const VoteFooter = (props) => {
	let { support, oppose, abandon } = props;
	return (
		<div className="footer">
			<Button onClick={support}>支持</Button>
			<Button type="primary" danger onClick={oppose}>
				反对
			</Button>
			<Button onClick={abandon}>弃权</Button>
		</div>
	);
};
export default connect(null, action.vote)(VoteFooter);
