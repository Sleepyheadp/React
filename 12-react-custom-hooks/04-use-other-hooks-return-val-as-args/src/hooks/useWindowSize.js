import { useEffect, useState } from "react";

function useWindowSize(throttleDuration = 100) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          timeoutId = null;
        }, throttleDuration);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [throttleDuration]);

  return windowSize;
}

export default useWindowSize;
