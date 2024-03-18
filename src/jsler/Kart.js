import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../cssler/Kart.css';

const Kart = () => {
  const [ulasimKartiBilgileri, setUlasimKartiBilgileri] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openapi.izmir.bel.tr/api/iztek/bakiyesorgulama/23208348897');
        if (!response.ok) {
          throw new Error('API\'den veri alınamadı.');
        }
        const data = await response.json();
        setUlasimKartiBilgileri(data);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, []);


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
        {ulasimKartiBilgileri ? (
        <div className='ciktiyeri'>
          
          <h2>Bakiye: {ulasimKartiBilgileri.UlasimKartBakiyesi.MevcutBakiye}</h2>
          <h2>Son İşlem Tarihi: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonIslemTarihi}</h2>
          <h2>Son Harcanan Tutar: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonHarcananTutar}</h2>
          <h2>Son Yukleme Tarihi:{ulasimKartiBilgileri.UlasimKartBakiyesi.SonYuklemeTarihi}</h2>
          <h2>Kart Numarası: {ulasimKartiBilgileri.UlasimKartBakiyesi.UlasimKartiNumarasi}</h2>
          <h2>Son Yuklenen Tutar: {ulasimKartiBilgileri.UlasimKartBakiyesi.SonYuklenenTutar}</h2>
          {/* Diğer bilgileri de buraya ekleyebilirsiniz */}
        </div>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
      </header>
    </div>
  );
}

export default Kart;
