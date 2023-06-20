import Sea from "../../assets/videos/sea.mp4";
import { ReactComponent as PlayComp } from "../../assets/images/play.svg";
import { ReactComponent as PauseComp } from "../../assets/images/pause.svg";
import {useRef, useState} from "react";
function VideoPlayer(){
  // 播放状态
  const [isPlaying, setIsPlaying] = useState(false);
  // 播放器DOM
  const videoRef = useRef();
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
      <video ref={videoRef} src={Sea} width='320' controls></video>
      <button onClick={handlePlay}>
        {isPlaying? <PauseComp /> : <PlayComp />}
      </button>
    </>
  )
}
export default VideoPlayer
