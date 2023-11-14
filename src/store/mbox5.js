import React from "react";
import { observable, action, autorun, computed } from "mobx";
import { observer } from "mobx-react";
class Store {
	// 公共状态:observable把数据变成可观察的
	@observable count = 1;
	@observable num = 2;
	@observable obj = {
		name: "张三",
		age: 18,
	};
	@action changeCount() {
		// this.count++;
		this.obj.age++;
	}
	// computed：创建一个具备计算缓存的计算属性
	@computed get sum() {
		console.log("sum方法执行了");
		return this.count + this.num;
	}
}
let store = new Store();

autorun(() => {
	// 首先在页面加载后会立即执行一次，然后每次数据「数据需要是可观察的」变化都会执行
	console.log(
		`autorun;${store.count}+${store.num}=${store.sum};${store.obj.age}`
	);
});

const Mbox5 = observer(() => {
	return (
		<div>
			<h1>mobx5</h1>
			<p>count:{store.count}</p>
			<p>age:{store.obj.age}</p>
			<button onClick={() => store.changeCount()}>点击</button>
		</div>
	);
});
export default Mbox5;
