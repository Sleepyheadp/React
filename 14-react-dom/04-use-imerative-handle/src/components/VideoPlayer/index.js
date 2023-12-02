import React, { forwardRef, useImperativeHandle, useRef } from "react";

import "./style.css";

function VideoPlayer({ src }, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return (
    <div className="videoPlayer">
      <video ref={videoRef} src={src} width="320" muted></video>
    </div>
  );
}

export default forwardRef(VideoPlayer);
