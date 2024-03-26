import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
