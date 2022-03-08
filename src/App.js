import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation'
import Header from './components/Header';
import Home from './Pages/Home';
import Models from './Pages/Models';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="models" element={<Models />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App;