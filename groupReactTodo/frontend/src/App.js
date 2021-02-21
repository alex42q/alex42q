import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Main from "./Components/Main/Main"
import Register from "./Components/Register/Register"
import Profile from "./Components/Profile/Profile"
import Login from "./Components/Login/Login"
import Forgot from "./Components/Forgot/Forgot"
import Logout from "./Components/Logout/Logout"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path='/forgot' component={Forgot}></Route>
        <Route path='/logout' component={Logout}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
