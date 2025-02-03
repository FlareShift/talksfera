import React, { useState } from 'react';
import './Resources.css';  // Подключаем файл с CSS стилями

export function Resources() {
  const [resources, setResources] = useState([]);  // Теперь список пуст

  const [newResource, setNewResource] = useState({ title: '', link: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResource(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddResource = () => {
    if (newResource.title && newResource.link) {
      setResources(prevResources => [...prevResources, newResource]);
      setNewResource({ title: '', link: '' });
    }
  };

  return (
    <div className="resources">
      <h2 className="resources-title">Ресурсы и упражнения</h2>

      <div className="add-resource">
        <input
          type="text"
          name="title"
          value={newResource.title}
          onChange={handleInputChange}
          placeholder="Название ресурса"
          className="resource-input"
        />
        <input
          type="url"
          name="link"
          value={newResource.link}
          onChange={handleInputChange}
          placeholder="Ссылка на ресурс"
          className="resource-input"
        />
        <button onClick={handleAddResource} className="add-button">Добавить в избранное</button>
      </div>

      <ul className="resource-list">
        {resources.map((res, index) => (
          <li key={index} className="resource-item">
            <a href={res.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
