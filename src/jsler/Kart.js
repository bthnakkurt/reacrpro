import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../cssler/Kart.css';

const Kart = () => {
  const [ulasimKartiBilgileri, setUlasimKartiBilgileri] = useState(null);
  const [kartNumarasi, setKartNumarasi] = useState("");
  const [kaydedilenKartlar, setKaydedilenKartlar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (kartNumarasi !== "") {
        const response = await fetch(`https://openapi.izmir.bel.tr/api/iztek/bakiyesorgulama/${kartNumarasi}`);
        const data = await response.json();
        setUlasimKartiBilgileri(data);
      }
    };

    fetchData();
  }, [kartNumarasi]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('kaydedilenKartlar'));
    if (savedCards) {
      setKaydedilenKartlar(savedCards);
    }
  }, []);

  const handleInputChange = (e) => {
    setKartNumarasi(e.target.value);
  };

  const handleSaveCard = () => {
    if (ulasimKartiBilgileri) {
      setKaydedilenKartlar([...kaydedilenKartlar, ulasimKartiBilgileri]);
      localStorage.setItem('kaydedilenKartlar', JSON.stringify([...kaydedilenKartlar, ulasimKartiBilgileri]));
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = kaydedilenKartlar.filter((_, i) => i !== index);
    setKaydedilenKartlar(updatedCards);
    localStorage.setItem('kaydedilenKartlar', JSON.stringify(updatedCards));
  };

  const handleLoadCard = (kartNumarasi) => {
    setKartNumarasi(kartNumarasi);
  };

  return (
    <div className="Kart">
      <header className="Kart-header">
        <div className="ustbutonlar">
          <Link to="/" className="geributonlink">
            <button className="geributon">Geri</button>
          </Link>
          <button className="kartikaydet" onClick={handleSaveCard}>Kartı Kaydet</button>
        </div>
        <h1 className="baslik">Kart</h1>
        <div className="inputicin">
          <input
            className="kartinput"
            type="number"
            placeholder="Kart numarasını giriniz"
            value={kartNumarasi}
            onChange={handleInputChange}
          />
        </div>
        {ulasimKartiBilgileri && ulasimKartiBilgileri.UlasimKartBakiyesi ? (
          <div className='ciktiyeri'>
            <h2>Bakiye: {ulasimKartiBilgileri.UlasimKartBakiyesi.MevcutBakiye}</h2>
            <h2>Son İşlem Tarihi: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonIslemTarihi}</h2>
            <h2>Son Harcanan Tutar: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonHarcananTutar}</h2>
            <h2>Son Yukleme Tarihi:{ulasimKartiBilgileri.UlasimKartBakiyesi.SonYuklemeTarihi}</h2>
            <h2>Kart Numarası: {ulasimKartiBilgileri.UlasimKartBakiyesi.UlasimKartiNumarasi}</h2>
            <h2>Son Yuklenen Tutar: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonYuklenenTutar}</h2>
          </div>
        ) : (
          <p>Aramalar eş zamanlıdır kart numarasını doğru girdiğiniz anda gözükecektir.</p>
        )}
        <div>
          {kaydedilenKartlar.map((kart, index) => (
            <div key={index}>
              <p onClick={() => handleLoadCard(kart.UlasimKartBakiyesi.UlasimKartiNumarasi)}>
                Kart Numarası: {kart.UlasimKartBakiyesi.UlasimKartiNumarasi}
                <button onClick={() => handleDeleteCard(index)}>Kartı Sil</button>
              </p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Kart;
