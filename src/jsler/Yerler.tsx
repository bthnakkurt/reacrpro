/*kütüphane alma*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*compenent alma*/
import '../cssler/Yerler.css';
import kart from '../res/kart.png';

function Yerler() {
  return (
    <div className="Yerler">
      <header className="Yerler-header">

        <a href="https://github.com/Baturax?tab=repositories" className="repoyagonderis">Bu site ayrıca açık kaynaktır</a>

        <h1 className="baslik">Seç:</h1>

        <div className="karticin">
        <img src={kart} className="kartfoto" />
        <h3 className="kartadi">Karta Bak</h3>
        </div>
      </header>
    </div>
  );
}

export default Yerler;
