import React, { useState, useEffect } from "react";
import "../App.css";

const Timer = (props) => {
  const [time, setTime] = useState(props.time);
  const [isPlaying, setPlay] = useState(props.autostart);
  const [timerProgress, setProgress] = useState(100);
  let timer;

  useEffect(() => {
    if (time > 0 && isPlaying) {
      timer = setTimeout(() => {
        setTime(time - 1);
        setProgress(((props.time - time) / props.time) * 100);
      }, 1000);
    }
    if (time <= 0 && isPlaying) {
      setPlay(false);
    }
  }, [time, isPlaying]);

  return (
    <div className="App">
      <div className="timer">{time}</div>
      <div
        className="progress"
        style={{ width: `${100 - timerProgress}%` }}
      ></div>
      <div className="timerbtn">
        <button
          className="btn"
          onClick={() => {
            if (isPlaying) {
              clearTimeout(timer);
              setPlay(false);
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
            clearTimeout(timer);
            setTime(props.time);
            setPlay(false);
            setProgress(100);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
