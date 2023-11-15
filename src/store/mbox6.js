import {
	makeAutoObservable,
	autorun,
	reaction,
	runInAction,
	// computed,
} from "mobx";
import { observer, inject } from "mobx-react";

/* 模拟异步获取数据 */
const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(100);
		}, 1000);
	});
};

class Store {
	count = 1;
	num = 2;
	obj = {
		name: "张三",
		age: 18,
	};

	constructor(root) {
		this.root = root;
		makeAutoObservable(this);
	}
	// makeAutoObservable：所有以get开头的方法都是计算属性computed
	get sum() {
		console.log("sum方法执行了");
		return this.count + this.num;
	}
	// makeAutoObservable：直接写方法名的，都是action，默认通过@action.bound修饰
	async changeCount() {
		let res = 0;
		try {
			res = await getData();
		} catch (_) {}
		runInAction(() => {
			this.count += res;
		});
	}
}
let store = new Store();

autorun(() => {
	console.log(
		`autorun;${store.count}+${store.num}=${store.sum};${store.obj.age}`
	);
});

reaction(
	() => [store.sum, store.obj.age], // 监听的数据
	() => {
		console
			.log
			// `reaction;${store.count}+${store.num}=${store.sum};${store.obj.age}`
			();
	}
);

const Mbox6 = observer((props) => {
	// let { task, personal } = props;
	// console.log("task", task, "personal", personal);
	return (
		<div>
			<h1>mobx6</h1>
			<p>count:{store.count}</p>
			<p>num:{store.num}</p>
			<p>sum:{store.sum}</p>
			<p>age:{store.obj.age}</p>
			<button onClick={() => store.changeCount()}>点击</button>
		</div>
	);
});
export default inject("task", "personal")(Mbox6);
