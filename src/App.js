import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Rockets from "./pages/Rockets";
import MyProfile from "./pages/MyProfile";
import Missions from "./pages/Missions";
import "./App.css";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
