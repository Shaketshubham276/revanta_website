import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import { Gallery } from "./components/gallery";

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
