import React from "react";
import { observable, action, autorun } from "mobx";
import { observer } from "mobx-react";
import { AutoComplete } from "antd";
/* 创建一个容器 */
class Store {
	// 公共状态:observable把数据变成可观察的
	@observable count = 0;
	// 公共方法:action把方法变成可观察的
	@action changeCount() {
		this.count++;
		console.log("changeCount方法执行了", this.count);
	}
}
let store = new Store();
/* @observer //在类组件上使用
class Mbox5 extends React.Component {
	render() {
		return (
			<div>
				<h1>mobx5</h1>
				<p>{store.count}</p>
				<button onClick={() => store.changeCount()}>点击</button>
			</div>
		);
	}
} */
autorun(() => {
	// 首先在页面加载后会立即执行一次，然后每次数据「数据需要是可观察的」变化都会执行
	console.log("autorun", store.count);
});
const Mbox5 = observer(() => {
	return (
		<div>
			<h1>mobx5</h1>
			<p>{store.count}</p>
			<button onClick={() => store.changeCount()}>点击</button>
		</div>
	);
});
export default Mbox5;
