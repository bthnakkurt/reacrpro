/*Kütühane al */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*Component al */
import '../cssler/App.css';
import './Yerler';
import Yerler from './Yerler';
import Bakiye from './Bakiye';

function App() {
  return (
    
    <div className="App">
      <Router>
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Yerler />} />
        <Route path="/Bakiye" element={<Bakiye />} />
      </Routes>
      </header>

      </Router>
    </div>
    
  );
}

export default App;
