import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Index from "./components/Index/Index"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
