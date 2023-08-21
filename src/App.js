import React from 'react';
import AboutUs from './components/about_us/aboutus';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
function App() {
  return (
    <div className="App">
       <Navbar />
      <AboutUs />
      <Footer/>
    </div>
  );
}

export default App;
