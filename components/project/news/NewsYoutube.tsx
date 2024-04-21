"use client";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function getWindowWidth() {
  return typeof window !== "undefined" ? window.innerWidth : 1880;
}
function getWindowHeight() {
  return typeof window !== "undefined" ? window.innerWidth * 0.52 : 980;
}

export default function NewsYoutube() {
  const [playerWidth, setPlayerWidth] = useState(getWindowWidth());
  const [playerHeight, setPlayerHeight] = useState(getWindowHeight());

  useEffect(() => {
    const handleResize = () => {
      setPlayerWidth(window.innerWidth > 1880 ? 1880 : window.innerWidth);
      setPlayerHeight(
        window.innerWidth * 0.52 > 980 ? 980 : window.innerWidth * 0.52
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <YouTube
      videoId="JS1Xc3HXnjg"
      opts={{
        height: `${playerHeight}px`,
        width: `${playerWidth}px`,
        playerVars: {
          autoplay: 1, //자동재생 1
          mute: 1,
          loop: 1,
        },
      }}
    />
  );
}
