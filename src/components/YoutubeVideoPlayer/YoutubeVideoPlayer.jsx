import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import "plyr-react/plyr.css";
import playIcon from '../../assets/images/playIcon.png';
import video from '../../assets/videos/video.mp4'
import './YoutubeVideoPlayer.css';

const YoutubeVideoPlayer = ({ className, audio, url }) => {
  const videoRef = useRef(null);
  const playIconRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      disableContextMenu: true,
      controls: [
        "play",
        "progress",
        "current-time",
        "volume",
        "settings",
        "fullscreen",
      ],
    });

    const handlePlay = () => {
      if (playIconRef.current) {
        playIconRef.current.style.opacity = '0';
      }
    };

    const handlePause = () => {
      if (playIconRef.current) {
        playIconRef.current.style.opacity = '100';
      }
    };

    player.on('play', handlePlay);
    player.on('pause', handlePause);

  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={`videoPlayer w-full relative my-11 ${className ? className : ""}`}>
      <div ref={playIconRef} className="playIcon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={playIcon} alt="playIcon" className="w-full" />
      </div>
      <video ref={videoRef} className="plyr-react plyr">
        <source src={video} type={audio ? "audio/mp3" : "video/mp4"} />
      </video>
    </div>
  );
};

export default YoutubeVideoPlayer;
