import React, { useState, useEffect } from 'react';
import './SecondPage.css'; // Імпортуємо CSS файл для стилів

const SecondPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Симуляція завантаження даних для країни
    const countryList = ["USA", "Canada", "Ukraine", "Germany", "France", "Italy", "Spain", "United Kingdom", "Australia", "India"];
    setCountries(countryList);
  }, []);

  return (
    <div className="main-container">
      {/* Ліва секція */}
      <div className="left-window">
        <h2></h2>
        <ul>
          <li><a href="#" className="active"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>

      {/* Права секція */}
      <div className="right-window">
        <h2></h2>

        {/* Контейнер для форми та зображення */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Ліва частина - Форма */}
          <form style={{ flex: 1 }}>
            <label htmlFor="country">Country</label>
            <select id="country" style={{ width: '320px', height: '40px', borderRadius: '5px', border: '1px solid #ccc', padding: '0 10px' }}>
              <option></option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>

            <label htmlFor="region">Region</label>
            <input type="text" id="region" placeholder="" style={{ width: '320px', height: '40px', borderRadius: '5px', border: '1px solid #ccc', padding: '0 10px' }} />

            <label htmlFor="settlement">Settlement</label>
            <input type="text" id="settlement" placeholder="" style={{ width: '320px', height: '40px', borderRadius: '5px', border: '1px solid #ccc', padding: '0 10px' }} />

            <label htmlFor="skip" style={{ display: 'block', marginBottom: '10px' }}>Skip (for only online)</label>
            <button id="skipButton" type="button" className="skip-button" style={{ width: '345px', height: '51px', borderRadius: '8px', top: '-60px', backgroundColor: '#D6542A', border: '1px solid #ccc', fontSize: '16px', position: 'relative', left: '-180px' }}>
              Press this button to skip this part
            </button>
            
            <button type="submit" className="back-button">Back</button>
            {/* Кнопка "Next" */}
            <button type="submit" className="next-button">Next</button>
          </form>

          {/* Права частина - Зображення */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img src="/Group 1171276580.svg" style={{ width: '432px', height: '394px', marginLeft: '2px', marginTop: '117px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '-30px' }}>
            <img src="\Frame 427320033.svg" className="custom-image" id="specific-image" alt="Additional Image" style={{ width: '984px', height: '76px', position: 'relative', left: '-960px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '10px' }}>
            <img src="\Group 1171276581.svg" alt="New Additional Image" style={{ width: '236px', height: '240px', position: 'absolute', left: '-2335px', top: '60px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '10px' }}>
            <img src="\Frame 1171277456.svg" alt="New Additional Image" style={{ width: '294px', height: '66px', position: 'absolute', left: '-2335px', top: '-30px' }} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SecondPage;
