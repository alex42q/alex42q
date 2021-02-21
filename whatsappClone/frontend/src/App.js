import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Login from "./Components/Login/Login"
import Main from "./Components/Main/Main"
import Register from "./Components/Register/Register"
import Error from "./Components/Error/Error"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
