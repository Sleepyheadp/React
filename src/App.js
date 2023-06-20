import {useCallback, useEffect, useId, useRef, useState} from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Sea from "./assets/videos/sea.mp4";
import { ReactComponent as PlayComp } from "./assets/images/play.svg";
import { ReactComponent as PauseComp } from "./assets/images/pause.svg";
import ProductListing from "./components/ProductListing";
function App() {
	return (
		<div className="container">
			<AddOnce />
			{/* React通过useRef操作DOM实现视频的播放和暂停*/}
			<VideoPlayerBox/>
			{/*	useId:给标签添加唯一Id*/}
			<AddUserId/>
			{/*	性能优化 */}
			<ProductList/>
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
			{/* 性能优化	*/}
		</>
	)
}
// React操作DOM案例：视频播放器
function VideoPlayerBox(){
	// 播放状态
	const [isPlaying, setIsPlaying] = useState(false);
	// 播放器DOM
	const videoRef = useRef();
	//直接在组件中调用没有效果，因为这个时候DOM还没有渲染出来，需要在useEffect中调用，
	// 也就是在组件渲染完成之后调用
	// videoRef.current.play()
	useEffect(()=>{
		videoRef.current.play()
		// console.log(videoRef.current.load)
		setIsPlaying(true)
	},[])
	// 播放
	function handlePlay() {
		// 获取DOM
		const video = videoRef.current;
		// 播放
		if (isPlaying) {
			// 这个pause和play是video自带的方法
			video.pause();
		} else {
			video.play();
		}
		// 更新播放状态
		setIsPlaying(!isPlaying);
	}
	return (
		<>
			<VideoPlayer src={Sea} ref={videoRef}/>
			<button onClick={handlePlay}>
				{isPlaying ? <PauseComp/> : <PlayComp/>}
			</button>
		</>
	)
}
// 给元素设置唯一id useId
function AddUserId(){
	const userNameId = useId();
	return (
		<>
			<label htmlFor={userNameId + 'input'}>用户名</label>
			<input type="text" id={userNameId + 'label'} />
		</>
	)
}
// useMemo的使用：避免重复渲染
// 案例：点击切换，主题更新时，产品列表数据也会重新渲染，导致性能浪费
function ProductList(){
	const [products, setProducts] = useState([
		{ id: 1, name: "苹果", price: 1 },
		{ id: 2, name: "香蕉", price: 5 },
		{ id: 3, name: "菠萝", price: 10 },
	]);

	const [isDark, setIsDark] = useState(true);

	function addProduct() {
		const newProduct = {
			id: Math.random(),
			name: `产品 ${products.length + 1}`,
			price: Math.floor(Math.random() * 10) + 1,
		};

		setProducts([...products, newProduct]);
	}
	// 改变主题的时候又使得子组件的渲染，因为子组件的props发生了变化，
	// 主题改变的时候，handleCheckout重新创建和销毁，ProductListing重新渲染
	// function handleCheckout(){
	// 	console.log('结算')
	// }
	// 通过useCallback优化
	const handleCheckout = useCallback(() => {
		console.log("结算");
	},[products]);

	return (
			<div className={isDark ? "" : "pink"}>
				<h1>产品列表</h1>
				<ProductListing products={products} onCheckout={handleCheckout} />
				<button onClick={addProduct}>添加产品</button>
				<label htmlFor="toggleTheme">
					改变主题{" "}
					<input
						id="toggleTheme"
						type="checkbox"
						checked={isDark}
						value={isDark}
						onChange={(e) => setIsDark(e.target.checked)}
					/>
				</label>
			</div>
	);
}
export default App;
