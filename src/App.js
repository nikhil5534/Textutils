import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes, // Import Routes (with an "s")
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router>
        
        <div className='container'>
          <Routes> 
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading='Enter your text to analyze' mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      <Textform heading='Enter your text to analyze' mode={mode} />
    </>
  );
}

export default App;
