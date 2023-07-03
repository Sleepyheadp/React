import React, {useCallback, useState,memo} from 'react'
import {Button} from "antd";
const Child = memo(function Child(props) {
	console.log('Child Render');
	return (
		<div>我是子组件</div>
)
});
const Demo = function Demo() {
	let [x, setX] = useState(0);
	const handle = useCallback(() => { }, []);
	return(
		<div className="vote-box">
			<Child handle={handle} />
			<div className="main">
				<p>{x}</p>
			</div>
			<div className="footer">
				<Button onClick={() => setX(x + 1)}>累加</Button>
			</div>
		</div>
)
};
export default Demo;
