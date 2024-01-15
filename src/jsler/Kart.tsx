import React from 'react';
import '../cssler/Kart.css';


function Kart() {
  return (
    <div className="Kart">
      <header className="Kart-header">
        <div className="ustbutonlar">
          <button className="geributon">Geri</button>
          <button className="ileributon">Kartı Kaydet</button>
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
