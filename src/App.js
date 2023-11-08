
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style/bootstrap.css";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Login from "./component/Login";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";
import Subscription from "./pages/profile/Subscription";
import Schedule from "./pages/story/Schedule";
import Static from "./pages/story/Static";

function App() {
const data =process.env.REACT_APP_URL
console.log("dasta",data)
  return (
    <div id="body-pd" className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/card" element={<Storycard />}></Route>
          <Route path="/list" element={<Storylist />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/subscription" element={<Subscription />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/static" element={<Static />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
