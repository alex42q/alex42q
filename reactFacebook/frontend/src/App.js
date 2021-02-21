import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Main from "./components/Main/Main"
import Login from "./components/Login/Login"
import Error from "./components/Error/Error"
import Logout from "./components/Logout/Logout"
import Reset from "./components/Reset/Reset"
import ResetPassword from "./components/resetPassword/ResetPassword"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/reset" component={Reset}/>
        <Route exact path="/resetpassword/:id" component={ResetPassword}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
