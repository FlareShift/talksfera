import React from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat/Chat";

const ChatPage = () => {
    const { room } = useParams(); // Получаем параметр room из URL

    return (
        <div>
            <h2>Чат-комната: {room}</h2>
            <Chat room={room} /> {/* Передаем room в компонент Chat */}
        </div>
    );
};

export default ChatPage;
