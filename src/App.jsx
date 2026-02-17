import { Routes, Route } from "react-router";
//import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}></Route>
    </Routes>
  );
}

export default App;
