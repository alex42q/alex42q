import React from "react"
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Header from "./Header/Header"
import Nav from "./Nav/Nav"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className="nav">
        <Nav />
        </div>
        <div className="header">
        <Header />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
