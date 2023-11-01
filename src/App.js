import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/bootstrap.css";
import './App.css';
import { useSelector } from "react-redux";
import Login from "./component/Login";
import Page from "./pages/home/page";

function App() {
 // const isUserLoggedIn = useSelector(login);

  return (
    //id="body-pd"
    <div className="App">
      <Router>
        <Routes>
          {/* {isUserLoggedIn ? ( */}
            <Route path="/home" element={<Page/> } />
          {/* ) : ( */}
            <Route path="/" element={<Login />} />
          {/* )} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
