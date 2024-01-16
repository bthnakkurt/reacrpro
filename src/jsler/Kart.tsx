import React from 'react';
import { Link } from 'react-router-dom';

import '../cssler/Kart.css';

function Kart() {
  return (
    <div className="Kart">
      <header className="Kart-header">

        <div className="ustbutonlar">

          <Link to="/" className="geributonlink">
            <button className="geributon">Geri</button>
          </Link>
          
          <button className="kartikaydet">Kartı Kaydet</button>
        </div>

        <h1 className="baslik">Kart</h1>

        <div className="inputicin">
          <input
            className="kartinput"
            type="number"
            placeholder="Kartınızı giriniz"
          />

          <button className="kartara">Arat</button>
        </div>
      </header>
    </div>
  );
}

export default Kart;
