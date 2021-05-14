import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Artwork from './Components/Artwork';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Navbar} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artwork" component={Artwork} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
