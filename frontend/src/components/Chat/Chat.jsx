import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import "./Chat.css"; // Подключаем стили

const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const username = localStorage.getItem("username") || "Гость";
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!room) {
      console.error("Ошибка: room не передан!");
      return;
    }

    let ws = new WebSocket(`ws://localhost:8000/ws/chat/${room}/`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [
        ...prev,
        {
          username: data.username,
          message: data.message,
          time: data.time || format(new Date(), "HH:mm"), // Берем время с сервера или текущее
        },
      ]);
    };

    ws.onclose = () => {
      console.warn("WebSocket отключен, пытаемся переподключиться...");
      setTimeout(() => setSocket(new WebSocket(`ws://localhost:8000/ws/chat/${room}/`)), 3000);
    };

    ws.onerror = (error) => {
      console.error("Ошибка WebSocket", error);
    };

    setSocket(ws);

    return () => {
      ws.close(); // Гарантируем закрытие WebSocket при размонтировании
    };
  }, [room]);

  // Для прокрутки чата и подгрузки сообщений
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = messagesEndRef.current;
      if (scrollTop === 0) {
        loadMoreMessages();
      }
    };

    const loadMoreMessages = async () => {
      const before = messages.length ? messages[0].time : null;
      const response = await fetch(`/api/chat-history/${room}?before=${before}`);
      const newMessages = await response.json();
      setMessages((prevMessages) => [...newMessages.reverse(), ...prevMessages]);
    };

    messagesEndRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      messagesEndRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [messages, room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

const sendMessage = () => {
  if (socket && socket.readyState === WebSocket.OPEN && message.trim()) {
    socket.send(JSON.stringify({ message, username }));
    setMessage("");
  } else {
    console.warn("WebSocket еще не готов для отправки сообщений.");
  }
};


  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Чат-комната: {room}</div>
      <p style={{ textAlign: "center", color: "gray" }}>
        Вы вошли как: <strong>{username}</strong>
      </p>

      <div className="chat-box" ref={messagesEndRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.username === username ? "my-message" : "other-message"}`}
          >
            <div>{msg.message}</div>
            <div className="message-info">{msg.username} • {msg.time}</div>
          </div>
        ))}
      </div>

      <div className="emoji-box">
        <button onClick={() => addEmoji("😃")}>😃</button>
        <button onClick={() => addEmoji("❤️")}>❤️</button>
        <button onClick={() => addEmoji("👍")}>👍</button>
        <button onClick={() => addEmoji("😂")}>😂</button>
        <button onClick={() => addEmoji("🎉")}>🎉</button>
      </div>

      <div className="input-box">
        <input
          type="text"
          className="input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Введите сообщение..."
        />
        <button className="send-button" onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Chat;
