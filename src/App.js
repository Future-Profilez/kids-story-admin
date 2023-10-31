
import {BrowserRouter as Router ,Route,Routes, Link} from "react-router-dom";
import Home from './pages/home/Home';
import "./style/bootstrap.css";
import './App.css';

function App() {
  return (
    <div id="body-pd" className="App">
     <Router>
      <Routes>
        <Route path= "/" element={<Home/>}>

        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
