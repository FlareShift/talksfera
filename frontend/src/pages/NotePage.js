import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header"; // Импортируем Header
import Footer from "../components/Footer/Footer"; // Импортируем Footer
import EmotionDiary from "../components/EmotionDiary/EmotionDiary";
import GoalsTracker from "../components/GoalsTracker/GoalsTracker";
import Resources from "../components/Resources/Resources";
import EmotionHistory from "../components/EmotionDiary/EmotionHistory";
import GoalsHistory from "../components/GoalsTracker/GoalsHistory";
import EmotionGraph from "../components/Chart/EmotionGraph";  // Импортируем новый компонент
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NotePage.module.css"; // Используем импорт как модуль

function NotePage() {
  const [activeTab, setActiveTab] = useState("EmotionDiary");
  const location = useLocation(); // Получаем текущий путь
  const navigate = useNavigate(); // Для навигации

  useEffect(() => {
    if (location.pathname === "/emotion-history") {
      setActiveTab("EmotionHistory"); // Если путь /emotion-history, переключаем на вкладку истории эмоций
    } else if (location.pathname === "/goals-history") {
      setActiveTab("GoalsHistory"); // Если путь /goals-history, переключаем на вкладку истории целей
    }
  }, [location]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "EmotionDiary":
        return <EmotionDiary />;
      case "EmotionGraph":
        return <EmotionGraph />;
      case "GoalsTracker":
        return <GoalsTracker />;
      case "Resources":
        return <Resources />;
      case "EmotionHistory":
        return <EmotionHistory />;
      case "GoalsHistory":
        return <GoalsHistory />; // История целей
      default:
        return <EmotionDiary />; // По умолчанию показываем дневник эмоций
    }
  };

  return (
    <div>
      <Header /> {/* Добавляем Header в начало страницы */}
      <div className={styles.notePage}> {/* Основной контейнер */}
        <div className="tablet-container">
          <div className="hand"></div>
          <div className={styles.tablet}>
            <div className={styles.sidebar}>
              <button
                className={activeTab === "EmotionDiary" ? styles.active : ""}
                onClick={() => setActiveTab("EmotionDiary")}
              >
                Дневник эмоций
              </button>
              <button
                className={activeTab === "EmotionGraph" ? styles.active : ""}  // Кнопка для графика
                onClick={() => setActiveTab("EmotionGraph")}
              >
                График эмоций
              </button>
              <button
                className={activeTab === "GoalsTracker" ? styles.active : ""}
                onClick={() => setActiveTab("GoalsTracker")}
              >
                Цели и достижения
              </button>
              <button
                className={activeTab === "Resources" ? styles.active : ""}
                onClick={() => setActiveTab("Resources")}
              >
                Ресурсы
              </button>
            </div>
            <div className={styles.content}>{renderActiveTab()}</div>
          </div>
        </div>
      </div>
      <Footer /> {/* Добавляем Footer внизу страницы */}
    </div>
  );
}

export default NotePage;
