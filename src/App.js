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
import Forget from "./component/Forget";
import Contact from "./contact/Contact";
import Term from "./component/Term";

function App() {

  return (
    <div id="body-pd" className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/terms" element={<Term />} />

            <Route path="/policy" element={<Privacy />} />
            
            <Route path='/contact' element={<Contact />} />

            <Route path="/home" element={
              <PrivateRouter>
                <Homepage />
              </PrivateRouter>
            } />
            <Route path="/ai-story" element={
              <PrivateRouter>
                <Storycard />
              </PrivateRouter>
            }
            />
            <Route path="/ai-story/:uuid" element={ <PrivateRouter><Storydetails /></PrivateRouter>} ></Route>
            
           <Route
           path="/ai-story-generator"
           element={<PrivateRouter><Storylist /></PrivateRouter>}
       />
            
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
