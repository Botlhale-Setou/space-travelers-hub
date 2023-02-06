import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Rockets from "./pages/Rockets";
import MyProfile from "./pages/MyProfile";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Rockets />} />
      <Route path='/myprofile' element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
