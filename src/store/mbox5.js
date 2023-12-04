import React from "react";
import {
	observable, // 把数据变成可观察的
	action, // 修改数据
	computed, // 计算属性
	autorun, // 监听数据变化「默认执行一次」
	reaction, // 监听数据变化「默认不执行，可以监听具体的数据」
	configure, // 全局配置
	runInAction, // 直接修改值
} from "mobx";
import { observer } from "mobx-react";
// 全局配置，开启严格模式
configure({
	// 强制使用action修改数据，不允许直接修改数据「不允许基于实例修改」
	enforceActions: "observed",
});
/* 模拟异步获取数据 */
const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(100);
		}, 1000);
	});
};
class Store {
	// 公共状态:observable把数据变成可观察的
	@observable count = 1;
	@observable num = 2;
	@observable obj = {
		name: "张三",
		age: 18,
	};
	// 解决方法四：使用bound（确保函数中的this都是Store的实例）
	@action.bound async changeCount() {
		// this.count++;
		// this.obj.age++;
		console.log("点击了5");
		let res = 0;
		try {
			res = await getData();
		} catch (_) {}
		runInAction(() => {
			this.count += res;
		});
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
	// console.log(`autorun;${store.count}+${store.num}=${store.sum};${store.obj.age}`);
});
// reaction和autorun类似，但是autorun是无法指定监听的数据的，而reaction可以
// reaction默认是不会执行的，当监听的数据发生变化时才会执行
reaction(
	() => [store.count, store.obj.age], // 监听的数据
	() => {
		console.log(
			`reaction;${store.count}+${store.num}=${store.sum};${store.obj.age}`
		);
	}
);

//定时器
setTimeout(() => {
	// store.changeCount();
	// 在严格模式下，直接调用action，而不是通过对象调用，this的值会是undefined
	/* let func = store.changeCount;
	func(); */
	// 解决方法一：使用箭头函数
	// store.changeCount();
	// 解决方法二：使用bind（确保函数中的this都是Store的实例）
	// let func = store.changeCount.bind(store);
	// func();
	/* 解决方法三：使用runInAction「意思就是使得直接修改值的方法像action修改值效果一样」 */
	// runInAction(() => {
	// 	store.count += 1;
	// });
	/* 开启严格模式下，不能直接修改值，需要通过action，否则会报错 */
	// store.count += 1;
}, 1000);

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
