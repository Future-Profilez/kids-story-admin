import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/Strap.css"
import './App.css';
import "./style/model.css"
import "./style/story.css"
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
import Storydetails from "./pages/story/Storydetails";
import Privacy from "./component/Privacy";
import Forgetpassword from "./pages/profile/Forgetpassword";
import Forget from "./component/Forget";

function App() {

  return (
    <div id="body-pd" className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Forget" element={<Forget />} />
            <Route path="/terms" element={<Privacy />} />
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
            <Route path ="/forgetpassword" element={<Forgetpassword/>}/>
            <Route
              path="/card/:uuid"
              element={<Storydetails />}
            ></Route>
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


          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}


export default App;
