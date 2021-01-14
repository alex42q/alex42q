import './App.css';
import Header from "./Header/Header"
import Nav from "./Nav/Nav"
import CvHeader from "./CvHeader/CvHeader"
import CvBody from "./CvBody/CvBody"
import Progress from "./ProgressBars/Progress"
import Skills from "./Skills/Skills"
import Footer from "./Footer/Footer"

function App() {
  return (
    <div className="App">
    <div className="bodyCont">
    <div className="header">
    <Header />
    </div>
    <div className="mainBody">
    <div className="cvNav"></div>
    <Nav />
    <div className="cvHeader">
      <CvHeader />
      <CvBody />
      <Progress />
      <Skills />
      <Footer />
    </div>
  </div>
  </div>
</div>
  );
}

export default App;
