import React, { forwardRef, useRef } from "react";

import "./style.css";

function VideoPlayer({ src }, ref) {
  return (
    <div className="videoPlayer">
      <video ref={ref} src={src} width="320" muted></video>
    </div>
  );
}

export default forwardRef(VideoPlayer);
