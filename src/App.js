import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import UberMich from "./components/UberMich";
import Leistungen from "./components/Leistungen";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <UberMich />
      <Leistungen />
    </div>
  );
}

export default App;
