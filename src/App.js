import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/Strap.css"
import './App.css';
import Homepage from "./pages/home/Homepage";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";
import Subscription from "./pages/profile/Subscription";
import Schedule from "./pages/story/Schedule";
import Static from "./pages/story/Static";
import PrivateRouter from "./Router/PrivateRouter";
import Login from "./component/Login";
import UserContextProvider from "./context/UserContextProvider";
import Data from "./pages/story/Data";
import { Toaster } from 'react-hot-toast';

function App() {
  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_URL;
  console.log("Base", IMAGE_BASE_URL);
  const [name, setName] = useState('')
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])
  return (
    <div id="body-pd" className="App">
        <Toaster
          position="top-center"
          reverseOrder={false} />
          <UserContextProvider value={{ name, setName }}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={
                <PrivateRouter>
                  <Homepage />
                </PrivateRouter>
              } />
              <Route path="/card" element={
                <PrivateRouter>
                  <Storycard />
                </PrivateRouter>
              }
              />
              <Route path="/list" element={
                <Storylist />

              } />
              <Route path="/profile" element={
                <PrivateRouter>
                  <Profile />
                </PrivateRouter>
              } />
              <Route path="/subscription" element={
                <PrivateRouter>
                  <Subscription />
                </PrivateRouter>
              } />
              <Route path="/schedule" element={
                <PrivateRouter>
                  <Schedule />
                </PrivateRouter>
              } />
              <Route path="/static" element={
                <PrivateRouter>
                  <Static />
                </PrivateRouter>
              } />
              <Route path ="/data" element ={<Data/>}/>
            </Routes> 
 
          </Router>
          </UserContextProvider>
      </div>
  );
}


export default App;
