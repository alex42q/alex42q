import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Index from "./Index/Index"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
