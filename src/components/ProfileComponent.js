//import logo from './logo.svg';
//import './App.css';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Profile() {
    return (
      <div className="Profile">
          <h2>Profile</h2>
          
          <Switch>
            <Route path="/profile/myName">
                <h4>Rajat Bhardwaj</h4>
            </Route>
            <Route path="/profile/description">
            <p>He is very rude and cute</p>
            </Route>
            <Route path="/profile/">
              <div>U are on Home Page bb</div>
            </Route>
        </Switch>
        <Link to="/profile/myName"><span>Profile Name</span></Link>
        <Link to="/profile/description"><span>Description</span></Link>
        <Link to="/"><span>go back to Home</span></Link>
      </div>
    );
  }
  
  export default Profile;
  