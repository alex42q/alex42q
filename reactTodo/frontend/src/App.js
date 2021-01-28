import React from "react"
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import Profile from "./components/Profile/Profile"
import Logout from "./components/Logout/Logout"

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/logout" component={Logout}/>
    <Route path="*" component={NotFound}/>
    </Switch>
    </Router>

  );
}

export default App;
