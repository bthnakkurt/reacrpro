import React from 'react';
import '../cssler/Yerler.css';
import kart from '../res/kart.png';

function Yerler() {
  return (
    <div className="Yerler">
      <header className="Yerler-header">
        <a href="https://github.com/Baturax?tab=repositories" className="repoyagonderis">Bu site ayrıca açık kaynaktır</a>
        <h1 className='bvaslik'>dd</h1>
        <img src={kart} className='kartfoto' />
      </header>
    </div>
  );
}

export default Yerler;
