import { Routes, Route } from "react-router";
//import { useState } from "react";
import "./App.css";
import { HeroSection, SkillSection } from "./components";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <HeroSection />
            <SkillSection />
          </>
        }
      />
    </Routes>
  );
}

export default App;
