
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style/Bootstrap.css";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Login from "./component/Login";
import Header from "./component/Header";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div id="body-pd" className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/story" element={<Storylist />}></Route>
          <Route path="/list" element={<Storycard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
