/*kütüphane al*/
import React from 'react';
import { Link } from 'react-router-dom';

/*compenent al*/
import '../cssler/Yerler.css';
import kart from '../res/kart.png';

function Yerler() {
  return (
    <div className="Yerler">
      <header className="Yerler-header">

        <a href="https://github.com/Baturax?tab=repositories" className="repoyagonderis">Bu site ayrıca açık kaynaktır</a>

        <h1 className="baslik">Seç:</h1>

        <div className="karticin">
          
        <Link to="/Bakiye" className="kartlink"> <img src={kart} className="kartfoto" /> </Link>
        <Link to="/Bakiye" className="kartlink">  <h3 className="kartadi">Karta Bak</h3> </Link>
        
        </div>
      </header>
    </div>
  );
}

export default Yerler;
