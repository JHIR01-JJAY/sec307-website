import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cyberpredators from "./pages/Cyberpredators";
// import Stories from "./pages/Stories";
// import Impact from "./pages/Impact";
import Laws from "./pages/Laws";
import Help from "./pages/Help";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cyberpredators" element={<Cyberpredators />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
