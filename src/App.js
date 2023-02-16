import React from "react";
import './App.css';
import NavBar from './components/js/NavBar';
import { Gallery } from "./components/js/Gallery";

import {
  BrowserRouter as Router,

  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
      <NavBar/>
      <Gallery/>
      <samosa/>
      {/* <div className="container">
        <Routes>
          
          <Route exact path="/gallery" element={<Gallery/>}></Route>

        </Routes> */}
      {/* </div> */}
    {/* // </Router> */}
      
    </>
  );
}

export default App;
