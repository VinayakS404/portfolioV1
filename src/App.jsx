import { Routes, Route } from "react-router";
//import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <SkillSection />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
