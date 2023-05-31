import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes} from "react-router-dom"
import React from 'react';
import VideoPage from './VideoPage'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
   <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/About" element={<About />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      </div>
   </>
  );
}

export default App;
