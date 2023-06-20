import {useEffect, useRef, useState} from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Sea from "./assets/videos/sea.mp4";
import { ReactComponent as PlayComp } from "./assets/images/play.svg";
import { ReactComponent as PauseComp } from "./assets/images/pause.svg";
function App() {
	return (
		<div className="container">
			<AddOnce />
			{/* React通过useRef操作DOM实现视频的播放和暂停*/}
			<VideoPlayerBox/>
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
		console.log(videoRef.current.load)
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
export default App;
