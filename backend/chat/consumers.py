import os
import django
from channels.generic.websocket import AsyncWebsocketConsumer
from django.utils.timezone import now
from channels.db import database_sync_to_async
import json

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "talksfera.settings")
django.setup()

from .models import Message


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Присоединяем пользователя к группе
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        # Загружаем последние 20 сообщений из БД
        messages = await self.get_chat_history(self.room_name)
        await self.send(text_data=json.dumps({"history": messages}))

    async def disconnect(self, close_code):
        # Удаляем пользователя из группы
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
            message = data.get("message")
            username = data.get("username")

            if not message or not username:
                return

            # Сохраняем сообщение в БД
            timestamp = await self.save_message(username, message, self.room_name)

            # Отправляем сообщение в группу
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "chat_message",
                    "message": message,
                    "username": username,
                    "time": timestamp
                }
            )

        except json.JSONDecodeError:
            print("Ошибка: Получены некорректные JSON-данные")

    async def chat_message(self, event):
        message = event["message"]
        username = event["username"]
        time = event["time"]

        # Отправляем сообщение клиенту
        await self.send(text_data=json.dumps({
            "message": message,
            "username": username,
            "time": time
        }))

    @database_sync_to_async
    def get_chat_history(self, room):
        messages = Message.objects.filter(room=room).order_by("-timestamp")[:20]
        return [
            {"username": msg.username, "message": msg.text, "time": msg.timestamp.strftime("%H:%M")}
            for msg in reversed(messages)
        ]

    @database_sync_to_async
    def save_message(self, username, message, room):
        msg = Message.objects.create(username=username, text=message, room=room, timestamp=now())
        return msg.timestamp.strftime("%H:%M")  # Возвращаем время для отправки клиенту
