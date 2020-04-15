import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flexwrap">
      <Timer time={22} autostart={true} step={1000} />
      <Timer time={60} autostart={false} step={2000} />
    </div>
  );
}

export default App;
