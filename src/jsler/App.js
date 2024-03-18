import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../cssler/App.css';
import './Yerler';
import Yerler from './Yerler';
import Kart from './Kart';

function App() {
  return (
    
    <div className="App">
      <Router>
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Yerler />} />
        <Route path="/Kart" element={<Kart />} />
      </Routes>
      </header>

      </Router>
    </div>
    
  );
}

export default App;
