import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flexwrap">
      <Timer
        time={22}
        autostart={true}
        step={1000}
        onTick={(time) => console.log("Осталось времени 1 таймер: " + time)}
      />
      <Timer
        time={60}
        autostart={false}
        step={2000}
        onTick={(time) => console.log("Осталось времени 2 таймер: " + time)}
      />
    </div>
  );
}

export default App;
