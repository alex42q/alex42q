import React from "react"
import './App.css';
import Nav from "./Nav"
import Header from "./Header"
import HeaderImg from "./HeaderImg"
import CenterPosts from "./CenterPosts"
import SidePosts from "./SidePosts"
import Popular from "./Popular"
import Tags from "./Tags"
import FollowMe from "./FollowMe"
import Subscribe from "./Subscribe"
import Footer from "./Footer"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from "./Register/Register"

function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
            <Switch>
             <Route path="/register" component={Register} exact/>
           </Switch>
      </BrowserRouter>
      
   <Nav />
   <div className="bodyContainer">
  <Header />
  <HeaderImg />
  <div className="blogContainer">
    <div className="blogRow">
      <div className="blogColumn">
      <CenterPosts />
      </div>
    </div>
    
    <div className="blogRow">
      <div className="blogColumn">
        <SidePosts />
        <Tags />
        <FollowMe />
        <Subscribe />
      </div>
    </div>
  </div>

  <div className="blogContainer">
    <div className="blogRow">
      <div className="blogColumn">
      <CenterPosts />
      </div>
    </div>
    
    <div className="blogRow">
      <div className="blogColumn">
        <Popular />
      </div>
    </div>
  </div>
   </div>
   <Footer />
    </div>
  );
}

export default App;
