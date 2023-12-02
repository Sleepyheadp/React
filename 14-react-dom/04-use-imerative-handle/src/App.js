import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Sea from "./assets/videos/sea.mp4";
import { ReactComponent as Play } from "./play.svg";
import { ReactComponent as Pause } from "./pause.svg";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    console.log(videoRef.current.load);
    setIsPlaying(true);
  }, []);

  function handlePlayClick() {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <main className="container">
      <div>
        <VideoPlayer src={Sea} ref={videoRef} />
        <button onClick={handlePlayClick}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </main>
  );
}

export default App;
