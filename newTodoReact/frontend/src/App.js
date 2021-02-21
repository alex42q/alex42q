import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./componets/Home/Home"
import Login from "./componets/Login/Login"
import Register from "./componets/Register/Register"
import Profile from "./componets/Profile/Profile"
import Logout from "./componets/Logout/Logout"
import Forgot from "./componets/Forgot/Forgot"
import Error from "./componets/Error/Error"
import Reset from "./componets/Reset/Reset"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/logout" component={Logout}/>
        <Route path='/forgot' component={Forgot}/>
        <Route path='/reset/:id' component={Reset}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
