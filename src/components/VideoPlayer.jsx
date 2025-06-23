import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    if (!playerRef.current) {
      const player = (playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        responsive: true,
        fluid: true,
      }));
    }
  }, []);

  React.useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src({ src });
    }
  }, [src]);

  React.useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return <video ref={videoRef} className="video-js" />;
};