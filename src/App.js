import { useState } from "react";
import "./App.css";
function App() {
	return (
		<div className="container">
			<AddOnce />
		</div>
	)
}
// useState使用
// React组件首字母要大写
function AddOnce(){
	const [count, setCount] = useState(0);
	return(
		<>
			<h1>{count}</h1>
			<button onClick={()=> setCount(count + 1)}>增加</button>
		</>
	)
}


export default App;
