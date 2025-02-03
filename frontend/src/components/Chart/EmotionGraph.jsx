import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export function EmotionGraph() {
  const [data, setData] = useState({ labels: [], datasets: [{ label: 'Эмоции', data: [] }] });
  const [entries, setEntries] = useState([]);
  const [timeRange, setTimeRange] = useState('week');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // 🔹 Получение записей эмоций
  useEffect(() => {
    const fetchEntries = async () => {
      let token = localStorage.getItem("access_token");
      const response = await fetch('http://127.0.0.1:8000/api/note/emotions/', { headers: { Authorization: `Bearer ${token}` } });
      const data = await response.json();

      console.log("📊 Полученные записи:", data);

      if (!Array.isArray(data)) {
        console.error("⚠️ Ошибка: API вернуло не массив!", data);
        return;
      }

      setEntries(data);
    };

    fetchEntries();
  }, []);

  // 🔹 Обновление графика при изменении данных
  useEffect(() => {
    if (entries.length > 0) {
      updateChartData(entries, timeRange);
    }
  }, [entries, timeRange, startDate, endDate]); // Теперь график обновляется при изменении данных

  // 🔹 Фильтрация данных
  const updateChartData = (entries, range) => {
    let filteredEntries = entries;

    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1); // Теперь создаём новую дату!

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1); // Теперь создаём новую дату!

    if (range === 'week') {
      filteredEntries = entries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= oneWeekAgo && entryDate <= today;
      });
    } else if (range === 'month') {
      filteredEntries = entries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= oneMonthAgo && entryDate <= today;
      });
    } else if (range === 'year') {
      filteredEntries = entries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= oneYearAgo && entryDate <= today;
      });
    } else if (range === 'custom') {
      filteredEntries = entries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
      });
    }

    console.log("📊 Даты:", filteredEntries.map(entry => entry.date));
    console.log("📈 Настроение:", filteredEntries.map(entry => entry.mood));

    setData({
      labels: filteredEntries.map(entry => new Date(entry.date).toLocaleDateString()),
      datasets: [
        {
          label: 'Эмоции',
          data: filteredEntries.map(entry => entry.mood),
          borderColor: 'rgba(106, 142, 127, 1)',
          backgroundColor: 'rgba(106, 142, 127, 0.2)',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#6a8e7f',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          fill: true,
        },
      ],
    });
  };

  // 🔹 Функция для изменения фильтра и обновления графика
  const handleFilterChange = (range) => {
    setTimeRange(range);
  };

  return (
    <div className="emotion-graph">
      <h2>График настроения и эмоций</h2>

      <div className="filters">
        <button onClick={() => handleFilterChange('week')} className={timeRange === 'week' ? 'active' : ''}>Неделя</button>
        <button onClick={() => handleFilterChange('month')} className={timeRange === 'month' ? 'active' : ''}>Месяц</button>
        <button onClick={() => handleFilterChange('year')} className={timeRange === 'year' ? 'active' : ''}>Год</button>
        <button onClick={() => handleFilterChange('custom')} className={timeRange === 'custom' ? 'active' : ''}>Выбрать даты</button>
      </div>

      {timeRange === 'custom' && (
        <div className="custom-date-picker">
          <label>С:</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <label>По:</label>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
      )}

      <div className="chart-container">
        <Line data={data} options={{ responsive: true, scales: { x: { title: { text: 'Дата', display: true } }, y: { min: 0, max: 10, title: { text: 'Настроение', display: true } } } }} />
      </div>
    </div>
  );
}

export default EmotionGraph;
