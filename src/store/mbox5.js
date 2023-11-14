import React from "react";
import { observable, action, autorun, observe } from "mobx";
import { observer } from "mobx-react";
class Store {
	// 公共状态:observable把数据变成可观察的
	@observable count = 0;
	@action changeCount() {
		this.count++;
	}
}
let store = new Store();

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
