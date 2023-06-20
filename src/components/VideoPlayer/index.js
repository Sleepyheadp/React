import React,{forwardRef, useImperativeHandle, useRef} from "react";
function VideoPlayer({src},ref){
  const videoRef = useRef()
  // 通过useImperativeHandle暴露给父组件的方法
  useImperativeHandle(ref,()=>({
    play:()=>{
      videoRef.current.play()
    },
    pause:()=>{
      videoRef.current.pause()
    }
  }))
  return (
    <>
      {/*视频有声音的话，浏览器默认视频关闭状态*/}
      <video ref={videoRef} src={src} width='320' muted controls></video>
    </>
  )
}
export default forwardRef(VideoPlayer)
