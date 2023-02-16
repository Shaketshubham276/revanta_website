import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import { Gallery } from "./components/Gallery";
import {
  BrowserRouter as Router,

  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <div className="container">
        <Routes>
          
          <Route exact path="/about" element={<Gallery/>}></Route>

        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;
