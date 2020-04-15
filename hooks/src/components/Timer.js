import React, { useState, useEffect } from "react";
import "../App.css";

const Timer = (props) => {
  const [time, setTime] = useState(props.time);
  const [isPlaying, setPlay] = useState(false);
  let timer;

  useEffect(() => {
    if (time > 0 && isPlaying) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    if (time <= 0 && isPlaying) {
      setPlay(false);
    }
  }, [time, isPlaying]);

  return (
    <div>
      <div className="timer">{time}</div>
      <div className="timerbtn">
        <button
          className="btn"
          onClick={() => {
            if (isPlaying) {
              setPlay(false);
              clearTimeout(timer);
            } else {
              setPlay(true);
            }
          }}
        >
          {isPlaying ? "Pause" : "Start"}
        </button>
        <button
          className="btn"
          onClick={() => {
            setTime(props.time);
            setPlay(false);
            clearTimeout(timer);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
