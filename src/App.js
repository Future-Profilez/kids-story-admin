import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/Bootstrap.css";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Login from "./component/Login";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";
import Subscription from "./pages/profile/Subscription";
import Schedule from "./pages/story/Schedule";
import Static from "./pages/story/Static";
import PrivateRouter from "./component/PrivateRouter";
import { useSelector } from 'react-redux';
import { login, selectuser } from './redux/UserSlice';

function App() {
  const user = useSelector(login);

  return (
    <div id="body-pd" className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/card" element={<Storycard />} />
          <Route path="/list" element={<Storylist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/static" element={<Static />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
