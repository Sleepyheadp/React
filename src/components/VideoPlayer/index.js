import Sea from "../../assets/videos/sea.mp4";
import { ReactComponent as PlayComp } from "../../assets/images/play.svg";
import { ReactComponent as PauseComp } from "../../assets/images/pause.svg";
import {useEffect, useRef, useState} from "react";
function VideoPlayer(){
  // 播放状态
  const [isPlaying, setIsPlaying] = useState(false);
  // 播放器DOM
  const videoRef = useRef();
  //直接在组件中调用没有效果，因为这个时候DOM还没有渲染出来，需要在useEffect中调用，
  // 也就是在组件渲染完成之后调用
  // videoRef.current.play()
  useEffect(()=>{
    videoRef.current.play()
    setIsPlaying(true)
  },[])
  // 播放
  function  handlePlay(){
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
      {/*视频有声音的话，浏览器默认视频关闭状态*/}
      <video ref={videoRef} src={Sea} width='320' muted controls></video>
      <button onClick={handlePlay}>
        {isPlaying? <PauseComp /> : <PlayComp />}
      </button>
    </>
  )
}
export default VideoPlayer
