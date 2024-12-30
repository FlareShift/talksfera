import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainPage from './pages/MainPage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    const [message, setMessage] = useState('');

      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/sample/')
          .then(response => {
            setMessage(response.data.message);
          })
          .catch(error => {
            console.error("There was an error!", error);
          });
      }, []);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
