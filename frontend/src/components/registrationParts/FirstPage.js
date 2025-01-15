import React, { useEffect, useState } from 'react';
import './FirstPage.css'; // Імпортуємо CSS файл для стилів

const FirstPage = () => {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Додавання днів
    const dayOptions = [];
    for (let i = 1; i <= 31; i++) {
      dayOptions.push(i);
    }
    setDays(dayOptions);

    // Додавання місяців
    const monthOptions = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    setMonths(monthOptions);

    // Додавання років
    const yearOptions = [];
    for (let i = 2025; i >= 1930; i--) {
      yearOptions.push(i);
    }
    setYears(yearOptions);
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
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="" style={{ width: '320px', height: '40px' }} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="" style={{ width: '320px', height: '40px' }} />

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="" style={{ width: '320px', height: '40px' }} />

            <label htmlFor="dob">Date of Birth</label>
            <div className="dob-container" style={{ width: '320px', display: 'flex', justifyContent: 'space-between' }}>
              <select id="day" style={{ width: '100px', height: '38px' }}>
                <option>Day</option>
                {days.map((day, index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>

              <select id="month" style={{ width: '100px', height: '38px' }}>
                <option>Month</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>

              <select id="year" style={{ width: '100px', height: '38px' }}>
                <option>Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Кнопка "Next" */}
            <button type="submit" style={{ width: '141px', height: '51px' }}>Next</button>
          </form>

          {/* Права частина - Зображення */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img src="/5076089.svg" style={{ width: '450px', height: '450px', marginLeft: '225px', marginTop: '85px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '-30px' }}>
            <img src="\Frame 427320033.svg" className="custom-image" id="specific-image" alt="Additional Image" style={{ width: '984px', height: '76px', position: 'relative', left: '-1000px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '10px' }}>
            <img src="\Group 1171276581.svg" alt="New Additional Image" style={{ width: '236px', height: '240px', position: 'absolute', left: '-2375px', top: '60px' }} />
          </div>

          <div style={{ position: 'relative', marginTop: '10px' }}>
            <img src="\Frame 1171277456.svg" alt="New Additional Image" style={{ width: '294px', height: '66px', position: 'absolute', left: '-2375px', top: '-30px' }} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default FirstPage;
