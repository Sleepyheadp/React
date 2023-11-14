import React from "react";
import { observable, action, autorun, computed, reaction } from "mobx";
import { observer } from "mobx-react";
class Store {
	// 公共状态:observable把数据变成可观察的
	@observable count = 1;
	@observable num = 2;
	@observable obj = {
		name: "张三",
		age: 18,
	};
	// 解决方法三：使用bound
	@action.bound changeCount() {
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

//定时器
setTimeout(() => {
	// store.changeCount();
	// 在严格模式下，直接调用action，而不是通过对象调用，this的值会是undefined
	/* let func = store.changeCount;
	func(); */
	// 解决方法一：使用箭头函数
	// store.changeCount();
	// 解决方法二：使用runInAction
	let func = store.changeCount.bind(store);
	func();
}, 1000);

// reaction和autorun类似，但是autorun是无法指定监听的数据的，而reaction可以
// reaction默认是不会执行的，当监听的数据发生变化时才会执行
/* reaction(
	() => [store.sum, store.obj.age], // 监听的数据
	() => {
		console.log(
			`reaction;${store.count}+${store.num}=${store.sum};${store.obj.age}`
		);
	}
); */

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
