import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Artwork from "./components/Artwork/Artwork";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artwork" component={Artwork} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
