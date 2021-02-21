import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Index from "./components/index/Index"
function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Index}/>
    </Switch>
    </Router>
  );
}

export default App;
