import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flexwrap">
      <Timer time={22} />
      <Timer time={60} />
    </div>
  );
}

export default App;
