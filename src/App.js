import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import UberMich from "./components/UberMich";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <UberMich />
    </div>
  );
}

export default App;
