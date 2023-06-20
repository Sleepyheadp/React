import {forwardRef} from "react";
function VideoPlayer({src},ref){
  return (
    <>
      {/*视频有声音的话，浏览器默认视频关闭状态*/}
      <video ref={ref} src={src} width='320' muted controls></video>
    </>
  )
}
export default forwardRef(VideoPlayer)
