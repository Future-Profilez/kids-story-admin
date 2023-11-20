import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/bootstrap.css";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";
import Subscription from "./pages/profile/Subscription";
import Schedule from "./pages/story/Schedule";
import Static from "./pages/story/Static";
import PrivateRouter from "./component/PrivateRouter";
import Login from "./component/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_URL;
  console.log("Base", IMAGE_BASE_URL);
  return (
    <div id="body-pd" className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
              // <PrivateRouter>
                <Homepage />
              // </PrivateRouter>
            } />
            <Route path="/card" element={
              // <PrivateRouter>
                <Storycard />
              // </PrivateRouter>
            }
            />
            <Route path="/list" element={
              // <PrivateRouter>
                <Storylist />
              // </PrivateRouter>

            } />
            <Route path="/profile" element={
              <PrivateRouter>
                <Profile />
              </PrivateRouter>
            } />
            <Route path="/subscription" element={
              // <PrivateRouter>
                <Subscription />
              // </PrivateRouter>
            } />
            <Route path="/schedule" element={
              // <PrivateRouter>
                <Schedule />
              // </PrivateRouter>
            } />
            <Route path="/static" element={
              // <PrivateRouter>
                <Static />
              // </PrivateRouter>
            } />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
