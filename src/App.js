import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flexwrap">
      <Timer time={22} autostart={true} />
      <Timer time={60} autostart={false} />
    </div>
  );
}

export default App;
