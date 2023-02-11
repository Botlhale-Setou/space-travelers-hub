import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';
import Header from './Components/Header';
import Rockets from './pages/Rockets';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
